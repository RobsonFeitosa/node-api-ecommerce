"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IHashProvider = _interopRequireDefault(require("../../users/providers/HashProvider/models/IHashProvider"));
var _CouponRepository = _interopRequireDefault(require("../infra/typeorm/repositories/CouponRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateCouponService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('CouponRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IHashProvider.default === "undefined" ? Object : _IHashProvider.default, typeof _CouponRepository.default === "undefined" ? Object : _CouponRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateCouponService {
  constructor(hashProvider, couponRepository) {
    this.hashProvider = hashProvider;
    this.couponRepository = couponRepository;
  }
  async execute(payload) {
    const {
      status = 'available',
      ...rest
    } = payload;
    const randonHash = String(Math.random());
    const hash = await this.hashProvider.generateHash(randonHash);
    const couponBuild = hash.toLocaleUpperCase().slice(-8, -1);
    const coupon = await this.couponRepository.create({
      ...rest,
      code_coupon: couponBuild,
      status
    });
    return coupon;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateCouponService;