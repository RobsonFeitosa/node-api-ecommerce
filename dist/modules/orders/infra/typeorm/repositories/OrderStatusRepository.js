"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _OrdersStatus = _interopRequireDefault(require("../entities/OrdersStatus"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class OrderStatusRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_OrdersStatus.default);
  }
  async create(payload) {
    const order = this.ormRepository.create(payload);
    await this.ormRepository.save(order);
    return order;
  }
  async findAndCountByOrder(orderId, options) {
    const orders = await this.ormRepository.findAndCount({
      order: {
        created_at: 'DESC'
      },
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where: {
        order_id: orderId
      }
    });
    return orders;
  }
  async findAndCount(options) {
    const orders = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit
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
}
var _default = exports.default = OrderStatusRepository;