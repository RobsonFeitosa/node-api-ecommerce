"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ITimeDiscountRepository = _interopRequireDefault(require("../repositories/ITimeDiscountRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let ShowTimeDiscountService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TimeDiscountRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ITimeDiscountRepository.default === "undefined" ? Object : _ITimeDiscountRepository.default, typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ShowTimeDiscountService {
  constructor(TimeDiscountRepository, productsRepository) {
    this.TimeDiscountRepository = TimeDiscountRepository;
    this.productsRepository = productsRepository;
  }
  async execute(timeDiscountId) {
    const timeDiscount = await this.TimeDiscountRepository.findById(timeDiscountId);
    if (!timeDiscount) {
      throw new _AppError.default('Time discount not found');
    }
    const productsIds = timeDiscount.products.map(product => product.id);
    const products = [];
    for (const productId of productsIds) {
      const product = await this.productsRepository.findById(productId);
      if (!product) {
        throw new _AppError.default('Product not found');
      }
      products.push(product);
    }
    timeDiscount.products = products;
    return timeDiscount;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = ShowTimeDiscountService;