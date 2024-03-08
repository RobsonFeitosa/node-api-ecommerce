"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IUsersRepository = _interopRequireDefault(require("../../users/repositories/IUsersRepository"));
var _ISettingsRepository = _interopRequireDefault(require("../repositories/ISettingsRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateSettingsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('SettingsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ISettingsRepository.default === "undefined" ? Object : _ISettingsRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateSettingsService {
  constructor(settingsRepository, usersRepository) {
    this.settingsRepository = settingsRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    dataSettings,
    userId
  }) {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new _AppError.default('User does not found');
    }
    const newSettings = {
      ...dataSettings
    };
    newSettings.user_id = userId;
    const settings = await this.settingsRepository.create(newSettings);
    return settings;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateSettingsService;