"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IOrdersRepository = _interopRequireDefault(require("../repositories/IOrdersRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateTrakingCodeService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('OrdersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IOrdersRepository.default === "undefined" ? Object : _IOrdersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateTrakingCodeService {
  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository;
  }
  async execute(orderId, tracking_code) {
    const order = await this.ordersRepository.findById(orderId);
    if (!order) {
      throw new _AppError.default('Order not found');
    }
    order.tracking_code = tracking_code;
    await this.ordersRepository.save(order);
    return order;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateTrakingCodeService;