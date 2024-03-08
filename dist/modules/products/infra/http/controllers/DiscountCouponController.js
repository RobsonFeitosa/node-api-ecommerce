"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateCouponService = _interopRequireDefault(require("../../../services/CreateCouponService"));
var _DeleteCategoryService = _interopRequireDefault(require("../../../services/DeleteCategoryService"));
var _IndexCouponService = _interopRequireDefault(require("../../../services/IndexCouponService"));
var _UpdateStatusCouponService = _interopRequireDefault(require("../../../services/UpdateStatusCouponService"));
var _ShowCouponService = _interopRequireDefault(require("../../../services/ShowCouponService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class DiscountCouponController {
  async create(request, response) {
    const createCoupon = _tsyringe.container.resolve(_CreateCouponService.default);
    const coupon = await createCoupon.execute(request.body);
    return response.json(coupon);
  }
  async update(request, response) {
    const updateCategory = _tsyringe.container.resolve(_UpdateStatusCouponService.default);
    const coupon = await updateCategory.execute(request.body);
    return response.json(coupon);
  }
  async show(request, response) {
    const {
      code
    } = request.params;
    const showCoupon = _tsyringe.container.resolve(_ShowCouponService.default);
    const coupon = await showCoupon.execute({
      code
    });
    return response.json(coupon);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const deleteCategory = _tsyringe.container.resolve(_DeleteCategoryService.default);
    await deleteCategory.execute(id);
    return response.status(204).send();
  }
  async index(request, response) {
    const indexCoupons = _tsyringe.container.resolve(_IndexCouponService.default);
    const coupons = await indexCoupons.execute();
    return response.json(coupons);
  }
}
exports.default = DiscountCouponController;