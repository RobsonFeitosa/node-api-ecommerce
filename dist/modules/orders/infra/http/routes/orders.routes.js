"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _OrdersController = _interopRequireDefault(require("../controller/OrdersController"));
var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ordersRouter = (0, _express.Router)();
const ordersController = new _OrdersController.default();
ordersRouter.use(_ensureAuthenticated.default);
ordersRouter.post('/', ordersController.create);
ordersRouter.patch('/code/:orderId', ordersController.updateTrackingCode);
ordersRouter.get('/', ordersController.index);
ordersRouter.get('/byuser', ordersController.indexByUser);
ordersRouter.get('/:id', ordersController.show);
var _default = exports.default = ordersRouter;