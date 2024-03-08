"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Coupon = _interopRequireDefault(require("../entities/Coupon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CouponRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_Coupon.default);
  }
  async create(data) {
    const couponCreated = this.ormRepository.create(data);
    await this.ormRepository.save(couponCreated);
    return couponCreated;
  }
  async findById(id) {
    const findcoupon = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findcoupon;
  }
  async findByCode(code) {
    const findcoupon = await this.ormRepository.findOne({
      where: {
        code_coupon: code
      }
    });
    return findcoupon;
  }
  async delete(id) {
    const coupon = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (coupon) {
      this.ormRepository.remove(coupon);
    }
  }
  async All() {
    const coupons = await this.ormRepository.find();
    return coupons;
  }
  async update(coupon) {
    const couponUpdate = await this.ormRepository.save(coupon);
    return couponUpdate;
  }
  async save(coupon) {
    return this.ormRepository.save(coupon);
  }
}
var _default = exports.default = CouponRepository;