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
var _ITeamRepository = _interopRequireDefault(require("../repositories/ITeamRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateProfessionalService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProfessionalRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)('TeamRepository')(target, undefined, 3);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _IProfessionalRepository.default === "undefined" ? Object : _IProfessionalRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default, typeof _ITeamRepository.default === "undefined" ? Object : _ITeamRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class UpdateProfessionalService {
  constructor(professionalRepository, usersRepository, mailProvider, teamRepository) {
    this.professionalRepository = professionalRepository;
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
    this.teamRepository = teamRepository;
  }
  async execute(data, professionalId) {
    console.log('entrouuuu213');
    const professional = await this.professionalRepository.findById(professionalId);
    if (!professional) {
      throw new _AppError.default('Professional not found');
    }
    professional.name = data.name;
    professional.function = data.function;
    professional.actived = data.actived;
    professional.user_id = data.user_id;
    if (data.team_id) {
      const team = await this.teamRepository.findById(data.team_id);
      if (!team) {
        throw new _AppError.default('Team not found');
      }
      professional.team = team;
      professional.team_id = data.team_id;
    }
    if (data.invite !== professional.invite && !professional.user_id) {
      professional.invite = data.invite;
      const professionalExist = await this.professionalRepository.findByInvite(data.invite);
      if (professionalExist) {
        throw new _AppError.default('This professional has already been invited');
      }
      const userInviteExist = await this.usersRepository.findByEmail(data.invite);
      if (userInviteExist) {
        const professionalExist = await this.professionalRepository.findByUserId(userInviteExist.id);
        if (professionalExist) {
          throw new _AppError.default('This professional has already been invited');
        }
      }
    }
    await this.professionalRepository.save(professional);
    return professional;
  }
  async sendActivedUserEmail(invite) {
    const activedTemplate = _path.default.resolve(__dirname, '..', 'views', 'invite.hbs');
    await this.mailProvider.sendMail({
      to: {
        name: 'invite',
        email: invite
      },
      subject: '[LemonadeTechnologies] Convite de colaborador',
      templateData: {
        file: activedTemplate,
        variables: {
          link: `${process.env.APP_WEB_URL}/signup/?invite=${invite}`
        }
      }
    });
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateProfessionalService;