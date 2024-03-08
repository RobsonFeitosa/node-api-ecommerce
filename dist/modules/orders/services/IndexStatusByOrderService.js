"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IOrderStatusRepository = _interopRequireDefault(require("../repositories/IOrderStatusRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexStatusByOrderService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('OrderStatusRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IOrderStatusRepository.default === "undefined" ? Object : _IOrderStatusRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class IndexStatusByOrderService {
  constructor(orderStatusRepository) {
    this.orderStatusRepository = orderStatusRepository;
  }
  async execute(orderId, options) {
    const status = await this.orderStatusRepository.findAndCountByOrder(orderId, options);
    return status;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexStatusByOrderService;