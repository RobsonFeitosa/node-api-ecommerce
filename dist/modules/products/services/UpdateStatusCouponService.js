"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CouponRepository = _interopRequireDefault(require("../infra/typeorm/repositories/CouponRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateStatusCouponService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CouponRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _CouponRepository.default === "undefined" ? Object : _CouponRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateStatusCouponService {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }
  async execute({
    status,
    code
  }) {
    const coupon = await this.couponRepository.findByCode(code);
    if (!coupon) {
      throw new _AppError.default('Coupon not found');
    }
    if (this.hasPassedDateValid(coupon.validation)) {
      throw new _AppError.default('Coupon expired');
    }
    if (coupon.status === 'used') {
      throw new _AppError.default('Coupon has already been used');
    }
    if (coupon.status === 'invalid') {
      throw new _AppError.default('Invalid coupon');
    }
    coupon.status = status;
    await this.couponRepository.save(coupon);
    return coupon;
  }
  hasPassedDateValid(dataValid) {
    const now = new Date().getTime();
    const valid = dataValid.getTime();
    return valid < now;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateStatusCouponService;