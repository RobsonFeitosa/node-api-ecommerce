"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _typeorm2 = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Schedule = _interopRequireDefault(require("../entities/Schedule"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ScheduleRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm2.default.getRepository(_Schedule.default);
  }
  async create(data) {
    const created = this.ormRepository.create(data);
    await this.ormRepository.save(created);
    return created;
  }
  async findById(id) {
    const found = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return found;
  }
  async findByName(name) {
    const found = await this.ormRepository.findOne({
      where: {
        name
      }
    });
    return found;
  }
  async delete(id) {
    const found = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (found) {
      this.ormRepository.remove(found);
    }
  }
  async findAndCount(options) {
    const found = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit
    });
    return found;
  }
  async findByProfessionalIdAndDates(professionalId, gte, lte) {
    const founds = await this.ormRepository.find({
      where: {
        professional_id: professionalId,
        date: (0, _typeorm.Between)(new Date(gte), new Date(lte))
      }
    });
    return founds;
  }
  async All() {
    const found = await this.ormRepository.find();
    return found;
  }
  async update(data) {
    const found = await this.ormRepository.save(data);
    return found;
  }
  async save(data) {
    return this.ormRepository.save(data);
  }
}
var _default = exports.default = ScheduleRepository;