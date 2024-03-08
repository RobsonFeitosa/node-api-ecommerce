"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _path = _interopRequireDefault(require("path"));
var _IProfessionalRepository = _interopRequireDefault(require("../repositories/IProfessionalRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IMailProvider = _interopRequireDefault(require("../../../shared/container/providers/MailProvider/models/IMailProvider"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateProfessionalService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProfessionalRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IProfessionalRepository.default === "undefined" ? Object : _IProfessionalRepository.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CreateProfessionalService {
  constructor(professionalRepository, mailProvider, usersRepository) {
    this.professionalRepository = professionalRepository;
    this.mailProvider = mailProvider;
    this.usersRepository = usersRepository;
  }
  async execute(data) {
    if (data.invite) {
      const userInviteExist = await this.usersRepository.findByEmail(data.invite);
      const professionalExist = await this.professionalRepository.findByInvite(data.invite);
      if (professionalExist) {
        throw new _AppError.default('This professional has already been invited');
      }
      if (userInviteExist) {
        const professionalExist = await this.professionalRepository.findByUserId(userInviteExist.id);
        if (professionalExist) {
          throw new _AppError.default('This professional has already been invited');
        }
      }
      this.sendActivedUserEmail(data.invite);
    }
    const professional = await this.professionalRepository.create(data);
    return professional;
  }
  async sendActivedUserEmail(invite) {
    const activedTemplate = _path.default.resolve(__dirname, '..', 'views', 'invite.hbs');
    await this.mailProvider.sendMail({
      to: {
        name: 'invite',
        email: invite
      },
      subject: '[LemonadeTechnologies] Convite de profissinal',
      templateData: {
        file: activedTemplate,
        variables: {
          link: `${process.env.APP_WEB_URL}/signup/?invite=${invite}`
        }
      }
    });
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateProfessionalService;