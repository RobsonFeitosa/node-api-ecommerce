"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductVariationsRespository = _interopRequireDefault(require("../repositories/IProductVariationsRespository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateProductVariationsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductVariationsRespository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProductVariationsRespository.default === "undefined" ? Object : _IProductVariationsRespository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateProductVariationsService {
  constructor(productVariationsRespository) {
    this.productVariationsRespository = productVariationsRespository;
  }
  async execute({
    payload,
    attributeId
  }) {
    const productVariations = await this.productVariationsRespository.create({
      ...payload,
      product_attr_id: attributeId
    });
    return productVariations;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateProductVariationsService;