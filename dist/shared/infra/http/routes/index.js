"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _transactions = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/transactions.routes"));
var _orders = _interopRequireDefault(require("../../../../modules/orders/infra/http/routes/orders.routes"));
var _ordersStatus = _interopRequireDefault(require("../../../../modules/orders/infra/http/routes/ordersStatus.routes"));
var _users = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/users.routes"));
var _sessions = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/sessions.routes"));
var _creditCard = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/creditCard.routes"));
var _password = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/password.routes"));
var _address = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/address.routes"));
var _contact = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/contact.routes"));
var _account = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/account.routes"));
var _comment = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/comment.routes"));
var _settings = _interopRequireDefault(require("../../../../modules/settings/infra/http/routes/settings.routes"));
var _products = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/products.routes"));
var _wish = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/wish.routes"));
var _categories = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/categories.routes"));
var _coupon = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/coupon.routes"));
var _productData = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/productData.routes"));
var _productAttr = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/productAttr.routes"));
var _productVariations = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/productVariations.routes"));
var _providers = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/providers.routes"));
var _timeDiscount = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/timeDiscount.routes"));
var _archive = _interopRequireDefault(require("../../../../modules/archives/infra/http/routes/archive.routes"));
var _team = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/team.routes"));
var _professional = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/professional.routes"));
var _timeIntervals = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/timeIntervals.routes"));
var _schedule = _interopRequireDefault(require("../../../../modules/schedule/infra/http/routes/schedule.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
routes.use('/actived', _account.default);
routes.use('/users', _users.default);
routes.use('/orders', _orders.default, _ordersStatus.default);
routes.use('/contact', _contact.default);
routes.use('/transactions', _transactions.default);
routes.use('/sessions', _sessions.default);
routes.use('/card', _creditCard.default);
routes.use('/password', _password.default);
routes.use('/address', _address.default);
routes.use('/settings', _settings.default);
routes.use('/comments', _comment.default);
routes.use('/time-discount', _timeDiscount.default);
routes.use('/products', _products.default, _wish.default, _coupon.default, _productData.default, _productAttr.default, _productVariations.default, _providers.default);
routes.use('/coupon', _coupon.default);
routes.use('/categories', _categories.default);
routes.use('/archive', _archive.default);
routes.use('/teams', _team.default);
routes.use('/professionals', _professional.default, _timeIntervals.default);
routes.use('/schedules', _schedule.default);
var _default = exports.default = routes;