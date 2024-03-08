"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _BCryptHashProvider = _interopRequireDefault(require("../../../../modules/users/providers/HashProvider/implementations/BCryptHashProvider"));
var _tsyringe = require("tsyringe");
var _Coupon = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/Coupon"));
var _couponsData = require("./data/coupons-data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const hashProvider = _tsyringe.container.resolve(_BCryptHashProvider.default);
class CouponsDatabaseSeed {
  async run(factory, connection) {
    await connection.createQueryBuilder().insert().into(_Coupon.default).values(_couponsData.couponsData).execute();
  }
}
exports.default = CouponsDatabaseSeed;