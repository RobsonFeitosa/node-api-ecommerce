"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _jsonwebtoken = require("jsonwebtoken");
var _auth = _interopRequireDefault(require("../../../config/auth"));
var _path = _interopRequireDefault(require("path"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IUserSettingsRepository = _interopRequireDefault(require("../repositories/IUserSettingsRepository"));
var _IHashProvider = _interopRequireDefault(require("../providers/HashProvider/models/IHashProvider"));
var _IUserTokensRepository = _interopRequireDefault(require("../repositories/IUserTokensRepository"));
var _IMailProvider = _interopRequireDefault(require("../../../shared/container/providers/MailProvider/models/IMailProvider"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let AuthenticateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UserSettingsRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 3);
}, _dec6 = function (target, key) {
  return (0, _tsyringe.inject)('UserTokensRepository')(target, undefined, 4);
}, _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IUserSettingsRepository.default === "undefined" ? Object : _IUserSettingsRepository.default, typeof _IHashProvider.default === "undefined" ? Object : _IHashProvider.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default, typeof _IUserTokensRepository.default === "undefined" ? Object : _IUserTokensRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = class AuthenticateUserService {
  constructor(usersRepository, userSettingsRepository, hashProvider, mailProvider, userTokensRepository) {
    this.usersRepository = usersRepository;
    this.userSettingsRepository = userSettingsRepository;
    this.hashProvider = hashProvider;
    this.mailProvider = mailProvider;
    this.userTokensRepository = userTokensRepository;
  }
  async execute({
    email,
    password
  }) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new _AppError.default('Incorrect email/password combination.', 401);
    const userSettings = await this.userSettingsRepository.findById(user.settings_id);
    if (!userSettings) throw new _AppError.default('Settings not found.', 404);
    const passwordMatched = await this.hashProvider.compareHash(password, user.password);
    console.log('entrou12344');
    if (!userSettings.actived) {
      this.sendActivedUserEmail(user);
      return {
        user: {},
        token: 'inactive-user--resend-mail'
      };
    }
    if (!passwordMatched) {
      throw new _AppError.default('Incorrect email/password combination.', 401);
    }
    const newUser = {
      ...userSettings,
      ...user
    };
    delete newUser.password;
    const {
      secret,
      expiresIn
    } = _auth.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      subject: user.id,
      expiresIn
    });
    return {
      user,
      token
    };
  }
  async sendActivedUserEmail(user) {
    const {
      token
    } = await this.userTokensRepository.generate(user.id);
    const activedTemplate = _path.default.resolve(__dirname, '..', 'views', 'actived_account.hbs');
    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email
      },
      subject: '[LemonadeTechnologies] Ativação da conta',
      templateData: {
        file: activedTemplate,
        variables: {
          name: user.name,
          token,
          link: `${process.env.APP_WEB_URL}/actived/?token=${token}`
        }
      }
    });
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = AuthenticateUserService;