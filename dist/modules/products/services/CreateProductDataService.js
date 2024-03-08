"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProductDataRepository = _interopRequireDefault(require("../repositories/IProductDataRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateProductDataService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductDataRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProductDataRepository.default === "undefined" ? Object : _IProductDataRepository.default, typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateProductDataService {
  constructor(productDataRepository, productsRepository) {
    this.productDataRepository = productDataRepository;
    this.productsRepository = productsRepository;
  }
  async execute(data) {
    const {
      payload,
      productId
    } = data;
    const product = await this.productsRepository.findById(productId);
    if (!product) {
      throw new _AppError.default('Product not found');
    }
    const productData = await this.productDataRepository.create({
      ...payload,
      product_id: productId
    });
    product.product_data = productData;
    await this.productsRepository.save(product);
    return productData;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateProductDataService;