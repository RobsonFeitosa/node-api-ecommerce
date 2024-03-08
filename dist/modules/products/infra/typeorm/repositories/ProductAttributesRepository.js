"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductAttributes = _interopRequireDefault(require("../entities/ProductAttributes"));
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductAttributesRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_ProductAttributes.default);
  }
  async create(data) {
    const created = this.ormRepository.create({
      ...data,
      options: JSON.stringify(data.options)
    });
    const productAttr = await this.ormRepository.save(created);
    return productAttr;
  }
  async findAndCount(options, productId) {
    const productAttr = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where: {
        product_id: productId
      },
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
  async findByName(productId, name) {
    const productAttr = await this.ormRepository.findOne({
      where: {
        product_id: productId,
        name
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
var _default = exports.default = ProductAttributesRepository;