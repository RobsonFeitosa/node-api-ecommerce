"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _path = _interopRequireDefault(require("path"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProfessionalRepository = _interopRequireDefault(require("../repositories/IProfessionalRepository"));
var _IMailProvider = _interopRequireDefault(require("../../../shared/container/providers/MailProvider/models/IMailProvider"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let SendEmailProfessionalService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProfessionalRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProfessionalRepository.default === "undefined" ? Object : _IProfessionalRepository.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class SendEmailProfessionalService {
  constructor(professionalRepository, mailProvider) {
    this.professionalRepository = professionalRepository;
    this.mailProvider = mailProvider;
  }
  async execute(email) {
    const professional = await this.professionalRepository.findByInvite(email);
    if (!professional) throw new _AppError.default('Professional not found', 404);
    this.sendActivedUserEmail(email);
  }
  async sendActivedUserEmail(invite) {
    const activedTemplate = _path.default.resolve(__dirname, '..', 'views', 'invite.hbs');
    await this.mailProvider.sendMail({
      to: {
        name: 'invite',
        email: invite
      },
      subject: '[LemonadeTechnologies] Convite de profissional',
      templateData: {
        file: activedTemplate,
        variables: {
          link: `${process.env.APP_WEB_URL}/signup/?invite=${invite}`
        }
      }
    });
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = SendEmailProfessionalService;