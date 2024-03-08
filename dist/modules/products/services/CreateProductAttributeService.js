"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductAttributesRepository = _interopRequireDefault(require("../repositories/IProductAttributesRepository"));
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateProductAttributesService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductAttributesRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProductAttributesRepository.default === "undefined" ? Object : _IProductAttributesRepository.default, typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateProductAttributesService {
  constructor(productAttributesRepository, productsRepository) {
    this.productAttributesRepository = productAttributesRepository;
    this.productsRepository = productsRepository;
  }
  async execute(payload, productId) {
    const product = await this.productsRepository.findById(productId);
    if (!product) {
      throw new _AppError.default('Product not found');
    }
    const attributeNameExist = await this.productAttributesRepository.findByName(productId, payload.name);
    if (attributeNameExist) {
      throw new _AppError.default('Attribute already exists');
    }
    const productAttr = await this.productAttributesRepository.create({
      ...payload,
      product_id: product.id
    });
    return productAttr;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateProductAttributesService;