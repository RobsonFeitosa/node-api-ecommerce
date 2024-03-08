"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));
var _OrdersStatusController = _interopRequireDefault(require("../controller/OrdersStatusController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ordersStatusRouter = (0, _express.Router)();
const ordersStatusController = new _OrdersStatusController.default();
ordersStatusRouter.use(_ensureAuthenticated.default);
ordersStatusRouter.post('/status', ordersStatusController.create);
// ordersStatusRouter.get('/', ordersStatusController.index)
// ordersStatusRouter.get('/byuser', ordersStatusController.indexByUser)
ordersStatusRouter.get('/status/:orderId', ordersStatusController.indexByOrder);
var _default = exports.default = ordersStatusRouter;