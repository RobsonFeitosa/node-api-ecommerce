"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ITeamRepository = _interopRequireDefault(require("../repositories/ITeamRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProfessionalRepository = _interopRequireDefault(require("../repositories/IProfessionalRepository"));
var _IProductsRepository = _interopRequireDefault(require("../../products/repositories/IProductsRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateTeamService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TeamRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProfessionalRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _ITeamRepository.default === "undefined" ? Object : _ITeamRepository.default, typeof _IProfessionalRepository.default === "undefined" ? Object : _IProfessionalRepository.default, typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class UpdateTeamService {
  constructor(teamRepository, professionalRepository, productsRepository) {
    this.teamRepository = teamRepository;
    this.professionalRepository = professionalRepository;
    this.productsRepository = productsRepository;
  }
  async execute(data, teamId) {
    const team = await this.teamRepository.findById(teamId);
    if (!team) {
      throw new _AppError.default('Team not found');
    }
    team.name = data.name;
    team.operation = data.operation;
    if (data.product_id) {
      const product = await this.productsRepository.findById(data.product_id);
      if (!product) {
        throw new _AppError.default('Product not found');
      }
      team.product = product;
      team.product_id = data.product_id;
    }
    await this.teamRepository.save(team);
    if (data.professionalsIds.length === 0) {
      throw new _AppError.default('Minimum 1 employee');
    }
    const professionals = await this.professionalRepository.findByTeamId(team.id);
    for (const professional of professionals) {
      professional.team_id = null;
      await this.professionalRepository.save(professional);
    }
    for (const professionalId of data.professionalsIds) {
      const professional = await this.professionalRepository.findById(professionalId);
      if (!professional) {
        throw new _AppError.default('Professional not found');
      }
      professional.team_id = team.id;
      await this.professionalRepository.save(professional);
    }
    return team;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateTeamService;