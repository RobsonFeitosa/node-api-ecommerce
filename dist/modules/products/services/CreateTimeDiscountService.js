"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ITimeDiscountRepository = _interopRequireDefault(require("../repositories/ITimeDiscountRepository"));
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateTimeDiscountService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TimeDiscountRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ITimeDiscountRepository.default === "undefined" ? Object : _ITimeDiscountRepository.default, typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateTimeDiscountService {
  constructor(TimeDiscountRepository, productsRepository) {
    this.TimeDiscountRepository = TimeDiscountRepository;
    this.productsRepository = productsRepository;
  }
  async execute(payload) {
    const {
      referencesIds,
      ...rest
    } = payload;
    const timeDiscount = await this.TimeDiscountRepository.create(rest);
    for (const referenceId of referencesIds) {
      const product = await this.productsRepository.findById(referenceId);
      if (product) {
        product.time_discount = timeDiscount;
        await this.productsRepository.save(product);
      }
    }
    return timeDiscount;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateTimeDiscountService;