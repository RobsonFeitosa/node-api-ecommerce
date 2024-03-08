"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateOrderService = _interopRequireDefault(require("../../../services/CreateOrderService"));
var _FindOrderService = _interopRequireDefault(require("../../../services/FindOrderService"));
var _classTransformer = require("class-transformer");
var _IndexOrderByUserService = _interopRequireDefault(require("../../../services/IndexOrderByUserService"));
var _IndexOrderService = _interopRequireDefault(require("../../../services/IndexOrderService"));
var _UpdateTrakingCodeService = _interopRequireDefault(require("../../../services/UpdateTrakingCodeService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class OrdersController {
  async create(request, response) {
    const id = request.user.id;
    const createOrder = _tsyringe.container.resolve(_CreateOrderService.default);
    const order = await createOrder.execute({
      user_id: id,
      payload: {
        ...request.body
      }
    });
    return response.json((0, _classTransformer.classToClass)(order));
  }
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
  async indexByUser(request, response) {
    const id = request.user.id;
    const {
      page = 1,
      limit = 99999
    } = request.query;
    const findOrder = _tsyringe.container.resolve(_IndexOrderByUserService.default);
    const order = await findOrder.execute(id, {
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(order));
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 99999
    } = request.query;
    const findOrder = _tsyringe.container.resolve(_IndexOrderService.default);
    const order = await findOrder.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(order));
  }
  async updateTrackingCode(request, response) {
    const {
      orderId
    } = request.params;
    const {
      tracking_code
    } = request.body;
    const updateOrder = _tsyringe.container.resolve(_UpdateTrakingCodeService.default);
    const order = await updateOrder.execute(orderId, tracking_code);
    return response.json((0, _classTransformer.classToClass)(order));
  }
}
exports.default = OrdersController;