"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));
var _FakeUsersTokensRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersTokensRepository"));
var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));
var _ResetPasswordService = _interopRequireDefault(require("./ResetPasswordService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let fakeUsersRepository;
let fakeUsersTokensRepository;
let resetPassword;
let fakeHashProvider;
describe('ResetPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeUsersTokensRepository = new _FakeUsersTokensRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    resetPassword = new _ResetPasswordService.default(fakeUsersRepository, fakeUsersTokensRepository, fakeHashProvider);
  });
  it('should be able to reset the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    });
    const {
      token
    } = await fakeUsersTokensRepository.generate(user.id);
    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash');
    await resetPassword.execute({
      password: '123123',
      token
    });
    const updatedUser = await fakeUsersRepository.findById(user.id);
    expect(generateHash).toHaveBeenCalledWith('123123');
    expect(updatedUser?.password).toBe('123123');
  });
  it('should not be able to reset the password with non-existing token', async () => {
    await expect(resetPassword.execute({
      token: 'non-existing-token',
      password: '123456'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to reset the password with non-existing user', async () => {
    const {
      token
    } = await fakeUsersTokensRepository.generate('non-existing-user');
    await expect(resetPassword.execute({
      token,
      password: '123456'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to reset the password if passed more than 2 hours', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    });
    const {
      token
    } = await fakeUsersTokensRepository.generate(user.id);
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      const customDate = new Date();
      return customDate.setHours(customDate.getHours() + 3);
    });
    await expect(resetPassword.execute({
      password: '123123',
      token
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});