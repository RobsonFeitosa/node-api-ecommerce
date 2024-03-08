"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _OrderProduct = _interopRequireDefault(require("../entities/OrderProduct"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class OrderProductRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_OrderProduct.default);
  }
  async create(payload) {
    const order = this.ormRepository.create(payload);
    await this.ormRepository.save(order);
    return order;
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
var _default = exports.default = OrderProductRepository;