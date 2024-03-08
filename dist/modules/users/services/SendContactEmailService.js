"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _path = _interopRequireDefault(require("path"));
var _IMailProvider = _interopRequireDefault(require("../../../shared/container/providers/MailProvider/models/IMailProvider"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let SendContactEmailService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class SendContactEmailService {
  constructor(usersRepository, mailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }
  async execute({
    name,
    email,
    assunto,
    message
  }) {
    const contactTemplate = _path.default.resolve(__dirname, '..', 'views', 'contact.hbs');
    const mailFert = 'contato@lemonadetechnologies.com.br';
    await this.mailProvider.sendMail({
      to: {
        name,
        email: mailFert
      },
      subject: `Contato - ${name} - [LemonadeTechnologies]`,
      templateData: {
        file: contactTemplate,
        variables: {
          name,
          assunto,
          email,
          message
        }
      }
    });
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = SendContactEmailService;