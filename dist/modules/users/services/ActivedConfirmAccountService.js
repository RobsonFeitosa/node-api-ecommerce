"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _dateFns = require("date-fns");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IUserTokensRepository = _interopRequireDefault(require("../repositories/IUserTokensRepository"));
var _IUserSettingsRepository = _interopRequireDefault(require("../repositories/IUserSettingsRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let ActivedConfirmAccountService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UserTokensRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('UserSettingsRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IUserTokensRepository.default === "undefined" ? Object : _IUserTokensRepository.default, typeof _IUserSettingsRepository.default === "undefined" ? Object : _IUserSettingsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class ActivedConfirmAccountService {
  constructor(usersRepository, userTokensRepository, userSettingsRepository) {
    this.usersRepository = usersRepository;
    this.userTokensRepository = userTokensRepository;
    this.userSettingsRepository = userSettingsRepository;
  }
  async execute({
    token,
    actived
  }) {
    const userToken = await this.userTokensRepository.findByToken(token);
    if (!userToken) throw new _AppError.default('user token does not exists');
    const user = await this.usersRepository.findById(userToken.user_id);
    if (!user) throw new _AppError.default('User does not exists');
    const userSettings = await this.userSettingsRepository.findById(user.settings_id);
    if (!userSettings) throw new _AppError.default('Settings not found.', 404);
    const tokenCreatedAt = userToken.created_at;
    const compareDate = (0, _dateFns.addHours)(tokenCreatedAt, 2);
    if ((0, _dateFns.isAfter)(Date.now(), compareDate)) throw new _AppError.default('Token expired');
    userSettings.actived = actived;
    await this.userSettingsRepository.save(userSettings);
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = ActivedConfirmAccountService;