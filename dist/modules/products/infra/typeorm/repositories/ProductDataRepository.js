"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductData = _interopRequireDefault(require("../entities/ProductData"));
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductDataRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_ProductData.default);
  }
  async create(data) {
    const created = this.ormRepository.create({
      ...data,
      dimensions: JSON.stringify(data.dimensions)
    });
    const productData = await this.ormRepository.save(created);
    return productData;
  }
  async findAndCount(options) {
    const productData = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      relations: ['user', 'product']
    });
    return productData;
  }
  async findByProductId(productId) {
    const productData = await this.ormRepository.findOne({
      where: {
        product_id: productId
      }
    });
    return productData;
  }
  async findById(id) {
    const productData = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return productData;
  }
  async delete(id) {
    const productData = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (productData) {
      this.ormRepository.remove(productData);
    }
  }
  async All() {
    const productData = await this.ormRepository.find();
    return productData;
  }
  async save(productData) {
    return this.ormRepository.save(productData);
  }
}
var _default = exports.default = ProductDataRepository;