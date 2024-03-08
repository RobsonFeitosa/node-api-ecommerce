"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));
var _DiscountCouponController = _interopRequireDefault(require("../controllers/DiscountCouponController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const couponsRouter = (0, _express.Router)();
const discountCouponController = new _DiscountCouponController.default();
couponsRouter.use(_ensureAuthenticated.default);
couponsRouter.post('/', discountCouponController.create);
couponsRouter.put('/', discountCouponController.update);
couponsRouter.delete('/:id', discountCouponController.delete);
couponsRouter.get('/', discountCouponController.index);
couponsRouter.get('/code/:code', discountCouponController.show);
var _default = exports.default = couponsRouter;