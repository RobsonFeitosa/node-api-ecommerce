"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductAttributesRepository = _interopRequireDefault(require("../repositories/IProductAttributesRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexProductAttributesService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductAttributesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProductAttributesRepository.default === "undefined" ? Object : _IProductAttributesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class IndexProductAttributesService {
  constructor(productAttributesRepository) {
    this.productAttributesRepository = productAttributesRepository;
  }
  async execute(options, productId) {
    const productAttr = await this.productAttributesRepository.findAndCount(options, productId);
    return productAttr;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexProductAttributesService;