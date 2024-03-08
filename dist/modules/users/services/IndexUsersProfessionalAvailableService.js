"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IProfessionalRepository = _interopRequireDefault(require("../repositories/IProfessionalRepository"));
var _classTransformer = require("class-transformer");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexUsersProfessionalAvailableService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProfessionalRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IProfessionalRepository.default === "undefined" ? Object : _IProfessionalRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class IndexUsersProfessionalAvailableService {
  constructor(usersRepository, professionalRepository) {
    this.usersRepository = usersRepository;
    this.professionalRepository = professionalRepository;
  }
  async execute(options) {
    const professional = await this.professionalRepository.findAndCount(options);
    const usersIds = professional[0].filter(professional => professional.user_id).map(c => c.user_id);
    const users = await this.usersRepository.findInNotUsersIds(usersIds);
    return (0, _classTransformer.classToClass)(users);
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexUsersProfessionalAvailableService;