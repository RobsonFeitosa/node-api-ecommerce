"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.couponsData = void 0;
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function dateValidation(day) {
  return (0, _dayjs.default)().add(day, 'day').toDate();
}
const couponsData = exports.couponsData = [{
  validation: dateValidation(3),
  status: 'available',
  discount: 60,
  code_coupon: '4DKQ37P'
}, {
  validation: dateValidation(6),
  status: 'available',
  discount: 20,
  code_coupon: '4DDS37P'
}, {
  validation: dateValidation(4),
  status: 'available',
  discount: 15,
  code_coupon: '4DK5S7P'
}, {
  validation: dateValidation(20),
  status: 'available',
  discount: 5,
  code_coupon: '2DKQ37P'
}, {
  validation: dateValidation(11),
  status: 'available',
  discount: 50,
  code_coupon: '1DKQJ7P'
}, {
  validation: dateValidation(9),
  status: 'available',
  discount: 30,
  code_coupon: '7DKQ378'
}, {
  validation: dateValidation(2),
  status: 'available',
  discount: 12,
  code_coupon: '4DKQ37P'
}];