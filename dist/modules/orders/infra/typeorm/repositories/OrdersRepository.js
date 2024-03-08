"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Order = _interopRequireDefault(require("../entities/Order"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class OrdersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_Order.default);
  }
  async create(payload) {
    const order = this.ormRepository.create(payload);
    await this.ormRepository.save(order);
    return order;
  }
  async findAndCountByUser(userId, options) {
    const orders = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where: {
        user_id: userId
      }
    });
    return orders;
  }
  async findAndCount(options) {
    const orders = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      order: {
        created_at: 'DESC'
      },
      relations: ['orders_products']
    });
    return orders;
  }
  async findById(id) {
    const findOrder = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findOrder;
  }
  async save(order) {
    return this.ormRepository.save(order);
  }
}
var _default = exports.default = OrdersRepository;