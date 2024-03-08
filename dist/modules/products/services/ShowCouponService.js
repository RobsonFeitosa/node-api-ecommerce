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
let ShowCouponService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CouponRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _CouponRepository.default === "undefined" ? Object : _CouponRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ShowCouponService {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }
  async execute({
    code
  }) {
    const coupon = await this.couponRepository.findByCode(code);
    if (!coupon) {
      throw new _AppError.default('Coupon not found');
    }
    return coupon;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = ShowCouponService;