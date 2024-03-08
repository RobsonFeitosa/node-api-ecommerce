"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductVariations = _interopRequireDefault(require("../entities/ProductVariations"));
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductVariationsRespository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_ProductVariations.default);
  }
  async create(data) {
    const created = this.ormRepository.create({
      ...data,
      dimensions: JSON.stringify(data.dimensions)
    });
    const productAttr = await this.ormRepository.save(created);
    return productAttr;
  }
  async findAndCount(options, userId) {
    const productAttr = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      relations: ['user', 'product'],
      order: {
        created_at: 'DESC'
      }
    });
    return productAttr;
  }
  async findById(id) {
    const productAttr = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return productAttr;
  }
  async delete(id) {
    const productAttr = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (productAttr) {
      this.ormRepository.remove(productAttr);
    }
  }
  async All() {
    const productAttr = await this.ormRepository.find();
    return productAttr;
  }
  async save(productAttr) {
    return this.ormRepository.save(productAttr);
  }
}
var _default = exports.default = ProductVariationsRespository;