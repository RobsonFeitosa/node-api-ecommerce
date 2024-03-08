"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _jsonwebtoken = require("jsonwebtoken");
var _auth = _interopRequireDefault(require("../../../config/auth"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IUserSettingsRepository = _interopRequireDefault(require("../repositories/IUserSettingsRepository"));
var _IGoogleProvider = _interopRequireDefault(require("../providers/AuthProvider/models/IGoogleProvider"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let AuthenticateGoogleService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('GoogleProvider')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('UserSettingsRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IGoogleProvider.default === "undefined" ? Object : _IGoogleProvider.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IUserSettingsRepository.default === "undefined" ? Object : _IUserSettingsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class AuthenticateGoogleService {
  constructor(googleProvider, usersRepository, userSettingsRepository) {
    this.googleProvider = googleProvider;
    this.usersRepository = usersRepository;
    this.userSettingsRepository = userSettingsRepository;
  }
  async execute({
    credential,
    clientId
  }) {
    const people = await this.googleProvider.getInfo(credential, clientId);
    const user = await this.usersRepository.findByEmail(people.email ?? '');
    if (!user) {
      const userSettings = await this.userSettingsRepository.create({
        actived: true,
        level: 2
      });
      const user = await this.usersRepository.create({
        email: people.email ?? '',
        name: people.name ?? '',
        password: (people.at_hash || people.jti) ?? '',
        settings_id: userSettings.id
      });
      const token = this.tokenSign(user.id);
      const newUser = {
        ...userSettings,
        ...user
      };
      delete newUser.password;
      return {
        user: newUser,
        token
      };
    }
    const token = this.tokenSign(user?.id ?? '');
    const userSettings = await this.userSettingsRepository.findById(user.settings_id);
    if (!userSettings) throw new _AppError.default('Settings not found.', 404);
    const newUser = {
      ...userSettings,
      ...user
    };
    delete newUser.password;
    return {
      user: newUser,
      token
    };
  }
  tokenSign(userId) {
    const {
      secret,
      expiresIn
    } = _auth.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      subject: userId,
      expiresIn
    });
    return token;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = AuthenticateGoogleService;