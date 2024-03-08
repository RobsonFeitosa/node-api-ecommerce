"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _typeorm2 = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _TimeDiscount = _interopRequireDefault(require("../entities/TimeDiscount"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TimeDiscountRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm2.default.getRepository(_TimeDiscount.default);
  }
  async create(data) {
    const created = this.ormRepository.create(data);
    const timeDiscount = await this.ormRepository.save(created);
    return timeDiscount;
  }
  async findAndCount(options) {
    const timeDiscounts = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      order: {
        created_at: 'DESC'
      },
      relations: ['products']
    });
    return timeDiscounts;
  }
  async findByAllAvailable() {
    const timeDiscounts = await this.ormRepository.find({
      where: {
        status: (0, _typeorm.In)(['actived', 'complete'])
      }
    });
    return timeDiscounts;
  }
  async findById(id) {
    const timeDiscount = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return timeDiscount;
  }
  async delete(id) {
    const timeDiscount = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (timeDiscount) {
      this.ormRepository.remove(timeDiscount);
    }
  }
  async All() {
    const timeDiscount = await this.ormRepository.find();
    return timeDiscount;
  }
  async save(data) {
    return this.ormRepository.save(data);
  }
}
var _default = exports.default = TimeDiscountRepository;