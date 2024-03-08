"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IUserSettingsRepository = _interopRequireDefault(require("../repositories/IUserSettingsRepository"));
var _IHashProvider = _interopRequireDefault(require("../providers/HashProvider/models/IHashProvider"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UserSettingsRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IUserSettingsRepository.default === "undefined" ? Object : _IUserSettingsRepository.default, typeof _IHashProvider.default === "undefined" ? Object : _IHashProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CreateUserService {
  constructor(usersRepository, userSettingsRepository, hashProvider) {
    this.usersRepository = usersRepository;
    this.userSettingsRepository = userSettingsRepository;
    this.hashProvider = hashProvider;
  }
  async execute(userData) {
    userData.forEach(async user => {
      const checkUserExists = await this.usersRepository.findByEmail(user.email);
      if (!checkUserExists) {
        const {
          name,
          password,
          email,
          ...settings
        } = user;
        const userSettings = await this.userSettingsRepository.create({
          ...settings
        });
        await this.usersRepository.create({
          email,
          name,
          password,
          settings_id: userSettings.id
        });
      }
    });
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateUserService;