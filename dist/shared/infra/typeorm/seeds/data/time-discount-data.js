"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeDiscountData = void 0;
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const now = (0, _dayjs.default)();
const timeDiscountData = exports.timeDiscountData = [{
  startDate: now.add(1, 'day').toDate(),
  endDate: now.add(3, 'day').toDate(),
  discount: 30,
  status: 'actived'
}, {
  startDate: now.add(1, 'day').toDate(),
  endDate: now.add(5, 'day').toDate(),
  discount: 10,
  status: 'actived'
}, {
  startDate: now.add(1, 'day').toDate(),
  endDate: now.add(4, 'day').toDate(),
  discount: 5,
  status: 'actived'
}, {
  startDate: now.add(1, 'day').toDate(),
  endDate: now.add(8, 'day').toDate(),
  discount: 5,
  status: 'actived'
}, {
  startDate: now.add(1, 'day').toDate(),
  endDate: now.add(7, 'day').toDate(),
  discount: 5,
  status: 'actived'
}];