"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _IWishRepository = _interopRequireDefault(require("../repositories/IWishRepository"));
var _ICategoriesRepository = _interopRequireDefault(require("../repositories/ICategoriesRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexProductsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('WishRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('CategoriesRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default, typeof _IWishRepository.default === "undefined" ? Object : _IWishRepository.default, typeof _ICategoriesRepository.default === "undefined" ? Object : _ICategoriesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class IndexProductsService {
  constructor(productsRepository, wishRepository, categoriesRepository) {
    this.productsRepository = productsRepository;
    this.wishRepository = wishRepository;
    this.categoriesRepository = categoriesRepository;
  }
  async execute(options, filter, order) {
    const products = await this.productsRepository.findAndCount(options, filter, order);
    for (const product of products[0]) {
      const wish = await this.wishRepository.findByProductAndUser(product.id, filter.userId);
      if (product.categories) {
        const categories = [];
        for (const categoryId of JSON.parse(product.categories)) {
          const category = await this.categoriesRepository.findById(categoryId);
          if (category) {
            categories.push(category);
          }
        }
        product.categories_items = categories;
      }
      product.wish = wish ?? null;
    }
    return products;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexProductsService;