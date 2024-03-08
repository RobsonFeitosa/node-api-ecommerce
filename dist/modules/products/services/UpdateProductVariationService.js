"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductVariationsRespository = _interopRequireDefault(require("../repositories/IProductVariationsRespository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProductAttributesRepository = _interopRequireDefault(require("../repositories/IProductAttributesRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateProductVariationService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductVariationsRespository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductAttributesRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProductVariationsRespository.default === "undefined" ? Object : _IProductVariationsRespository.default, typeof _IProductAttributesRepository.default === "undefined" ? Object : _IProductAttributesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class UpdateProductVariationService {
  constructor(productVariationsRespository, productAttributesRepository) {
    this.productVariationsRespository = productVariationsRespository;
    this.productAttributesRepository = productAttributesRepository;
  }
  async execute({
    payload,
    attributeId,
    variationId
  }) {
    const attribute = await this.productAttributesRepository.findById(attributeId);
    if (!attribute) {
      throw new _AppError.default('Attribute not found');
    }
    const variation = await this.productVariationsRespository.findById(variationId);
    if (!variation) {
      throw new _AppError.default('Variation not found');
    }
    variation.actived = payload.actived;
    variation.dimensions = JSON.stringify(payload.dimensions);
    variation.name = payload.name;
    variation.sku = payload.sku;
    variation.price = payload.price;
    variation.quantity = payload.quantity;
    variation.weight = payload.weight;
    await this.productVariationsRespository.save(variation);
    return variation;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateProductVariationService;