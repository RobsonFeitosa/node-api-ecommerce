"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProfessionalRepository = _interopRequireDefault(require("../repositories/IProfessionalRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let indexProfessionalAvailableService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProfessionalRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProfessionalRepository.default === "undefined" ? Object : _IProfessionalRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class indexProfessionalAvailableService {
  constructor(professionalRepository) {
    this.professionalRepository = professionalRepository;
  }
  async execute() {
    const professionals = await this.professionalRepository.findAvailable();
    return professionals;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = indexProfessionalAvailableService;