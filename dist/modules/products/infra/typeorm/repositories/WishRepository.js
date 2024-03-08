"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductWish = _interopRequireDefault(require("../entities/ProductWish"));
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class WishRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_ProductWish.default);
  }
  async create(data) {
    const created = this.ormRepository.create(data);
    const wish = await this.ormRepository.save(created);
    return wish;
  }
  async findAndCount(options, userId) {
    const wish = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where: {
        user_id: userId
      },
      relations: ['user', 'product']
    });
    return wish;
  }
  async findByProductAndUser(productId, userId) {
    const wish = await this.ormRepository.findOne({
      where: {
        product_id: productId,
        user_id: userId
      }
    });
    return wish;
  }
  async findById(id) {
    const wish = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return wish;
  }
  async delete(id) {
    const wish = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (wish) {
      this.ormRepository.remove(wish);
    }
  }
  async All() {
    const wish = await this.ormRepository.find();
    return wish;
  }
  async save(wish) {
    return this.ormRepository.save(wish);
  }
}
var _default = exports.default = WishRepository;