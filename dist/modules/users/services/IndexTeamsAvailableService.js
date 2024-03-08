"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ITeamRepository = _interopRequireDefault(require("../repositories/ITeamRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexTeamsAvailableService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TeamRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ITeamRepository.default === "undefined" ? Object : _ITeamRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class IndexTeamsAvailableService {
  constructor(teamRepository) {
    this.teamRepository = teamRepository;
  }
  async execute() {
    const teams = await this.teamRepository.findByServices();
    return teams;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexTeamsAvailableService;