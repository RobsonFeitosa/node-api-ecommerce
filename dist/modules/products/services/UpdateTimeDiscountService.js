"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ITimeDiscountRepository = _interopRequireDefault(require("../repositories/ITimeDiscountRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateTimeDiscountService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TimeDiscountRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ITimeDiscountRepository.default === "undefined" ? Object : _ITimeDiscountRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateTimeDiscountService {
  constructor(TimeDiscountRepository) {
    this.TimeDiscountRepository = TimeDiscountRepository;
  }
  async execute(timeDiscountId, payload) {
    const timeDiscount = await this.TimeDiscountRepository.findById(timeDiscountId);
    if (!timeDiscount) {
      throw new _AppError.default('Time discount not found');
    }
    timeDiscount.status = payload.status;
    timeDiscount.discount = payload.discount;
    timeDiscount.startDate = payload.startDate;
    timeDiscount.endDate = payload.endDate;
    timeDiscount.productsIds = JSON.stringify(payload.productsIds);
    await this.TimeDiscountRepository.save(timeDiscount);
    return timeDiscount;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateTimeDiscountService;