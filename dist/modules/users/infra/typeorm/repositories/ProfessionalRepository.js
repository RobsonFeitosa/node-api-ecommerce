"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _typeorm2 = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Professional = _interopRequireDefault(require("../entities/Professional"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProfessionalRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm2.default.getRepository(_Professional.default);
  }
  async create(data) {
    const professional = this.ormRepository.create(data);
    await this.ormRepository.save(professional);
    return professional;
  }
  async findById(id) {
    const professional = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return professional;
  }
  async findByInvite(email) {
    const professional = await this.ormRepository.findOne({
      where: {
        invite: email
      }
    });
    return professional;
  }
  async findByUserId(id) {
    const professional = await this.ormRepository.findOne({
      where: {
        user_id: id
      }
    });
    return professional;
  }
  async findByTeamId(id) {
    const professionals = await this.ormRepository.find({
      where: {
        team_id: id
      }
    });
    return professionals;
  }
  async findByUserIdNotNull() {
    const professionals = await this.ormRepository.find({
      where: {
        user_id: (0, _typeorm.Not)((0, _typeorm.IsNull)()),
        team_id: (0, _typeorm.IsNull)()
      }
    });
    return professionals;
  }
  async findAndCount(options) {
    const professionals = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      order: {
        created_at: 'DESC'
      },
      relations: ['user', 'team']
    });
    return professionals;
  }
  async findAvailable() {
    const builder = this.ormRepository.createQueryBuilder('pr100_professional');
    const professionals = await builder.where('pr100_professional.user_id is not null and pr100_professional.actived = true').select().orderBy('RANDOM()').getMany();
    return professionals;
  }
  async delete(id) {
    const professional = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (professional) {
      this.ormRepository.remove(professional);
    }
  }
  async save(data) {
    return this.ormRepository.save(data);
  }
}
var _default = exports.default = ProfessionalRepository;