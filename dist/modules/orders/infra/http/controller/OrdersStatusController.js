"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _FindOrderService = _interopRequireDefault(require("../../../services/FindOrderService"));
var _classTransformer = require("class-transformer");
var _IndexOrderService = _interopRequireDefault(require("../../../services/IndexOrderService"));
var _CreateOrderStatusService = _interopRequireDefault(require("../../../services/CreateOrderStatusService"));
var _IndexStatusByOrderService = _interopRequireDefault(require("../../../services/IndexStatusByOrderService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class OrdersStatusController {
  async show(request, response) {
    const {
      id
    } = request.params;
    const findOrder = _tsyringe.container.resolve(_FindOrderService.default);
    const order = await findOrder.execute({
      id
    });
    return response.json((0, _classTransformer.classToClass)(order));
  }
  async indexByOrder(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const {
      orderId
    } = request.params;
    const findOrder = _tsyringe.container.resolve(_IndexStatusByOrderService.default);
    const order = await findOrder.execute(orderId, {
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(order));
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const findOrder = _tsyringe.container.resolve(_IndexOrderService.default);
    const order = await findOrder.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(order));
  }
  async create(request, response) {
    const createOrderStatus = _tsyringe.container.resolve(_CreateOrderStatusService.default);
    const orderStatus = await createOrderStatus.execute({
      payload: {
        ...request.body
      }
    });
    return response.json((0, _classTransformer.classToClass)(orderStatus));
  }
}
exports.default = OrdersStatusController;