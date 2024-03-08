"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Team = _interopRequireDefault(require("../entities/Team"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TeamRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_Team.default);
  }
  async create(data) {
    const team = this.ormRepository.create(data);
    await this.ormRepository.save(team);
    return team;
  }
  async findById(id) {
    const team = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return team;
  }
  async findAndCount(options) {
    const teams = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      order: {
        created_at: 'DESC'
      },
      relations: ['professional']
    });
    return teams;
  }
  async delete(id) {
    const team = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (team) {
      this.ormRepository.remove(team);
    }
  }
  async save(data) {
    return this.ormRepository.save(data);
  }
}
var _default = exports.default = TeamRepository;