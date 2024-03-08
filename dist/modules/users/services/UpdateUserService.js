"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IHashProvider = _interopRequireDefault(require("../providers/HashProvider/models/IHashProvider"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IUserSettingsRepository = _interopRequireDefault(require("../repositories/IUserSettingsRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UserSettingsRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IUserSettingsRepository.default === "undefined" ? Object : _IUserSettingsRepository.default, typeof _IHashProvider.default === "undefined" ? Object : _IHashProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class UpdateUserService {
  constructor(usersRepository, userSettingsRepository, hashProvider) {
    this.usersRepository = usersRepository;
    this.userSettingsRepository = userSettingsRepository;
    this.hashProvider = hashProvider;
  }
  async execute({
    user_id,
    userData
  }) {
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new _AppError.default('User not found');
    }
    if (userData.name) {
      user.name = userData.name;
    }
    if (userData.email) {
      user.email = userData.email;
    }
    if (userData.level) {
      user.settings.level = userData.level;
    }
    if (userData.actived) {
      user.settings.actived = userData.actived;
    }
    if (userData.phone_number) {
      user.settings.phone_number = userData.phone_number;
    }
    if (userData.cpf) {
      user.settings.cpf = userData.cpf;
    }
    if (userData.password && !userData.old_password) {
      throw new _AppError.default('You need to inform the old password to set a new password.');
    }
    if (userData.password && userData.old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(userData.old_password, user.password);
      if (!checkOldPassword) {
        throw new _AppError.default('Old password does not match.');
      }
      user.password = await this.hashProvider.generateHash(userData.password);
    }
    const userNew = await this.usersRepository.save(user);
    await this.userSettingsRepository.save(userNew.settings);
    return userNew;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateUserService;