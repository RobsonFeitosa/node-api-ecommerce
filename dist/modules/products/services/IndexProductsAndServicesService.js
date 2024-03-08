"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _IWishRepository = _interopRequireDefault(require("../repositories/IWishRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexProductsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('WishRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default, typeof _IWishRepository.default === "undefined" ? Object : _IWishRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class IndexProductsService {
  constructor(productsRepository, wishRepository) {
    this.productsRepository = productsRepository;
    this.wishRepository = wishRepository;
  }
  async execute(options, userId, onlyDiscount) {
    const products = await this.productsRepository.findAndCount(options, userId, onlyDiscount);
    for (const product of products[0]) {
      const wish = await this.wishRepository.findByProductAndUser(product.id, userId);
      product.wish = wish ?? null;
    }

    // console.log({ products: products[0] })

    return products;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexProductsService;