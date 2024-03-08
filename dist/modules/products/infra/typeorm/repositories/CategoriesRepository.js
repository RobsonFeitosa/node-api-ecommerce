"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _ProductCategory = _interopRequireDefault(require("../entities/ProductCategory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CategoriesRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_ProductCategory.default);
  }
  async create(data) {
    const categoryCreated = this.ormRepository.create(data);
    await this.ormRepository.save(categoryCreated);
    return categoryCreated;
  }
  async findByName(name) {
    const findCategory = await this.ormRepository.findOne({
      where: {
        name
      }
    });
    return findCategory;
  }
  async findById(id) {
    const findCategory = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findCategory;
  }
  async delete(id) {
    const category = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (category) {
      this.ormRepository.remove(category);
    }
  }
  async findAndCount(options, type) {
    const where = {};
    if (type) {
      where.type = type;
    }
    const categories = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where
    });
    return categories;
  }
  async All() {
    const categories = await this.ormRepository.find();
    return categories;
  }
  async update(category) {
    const categoryUpdate = await this.ormRepository.save(category);
    return categoryUpdate;
  }
  async save(category) {
    return this.ormRepository.save(category);
  }
}
var _default = exports.default = CategoriesRepository;