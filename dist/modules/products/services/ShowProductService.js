"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _ICategoriesRepository = _interopRequireDefault(require("../repositories/ICategoriesRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexProductsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('CategoriesRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default, typeof _ICategoriesRepository.default === "undefined" ? Object : _ICategoriesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class IndexProductsService {
  constructor(productsRepository, categoriesRepository) {
    this.productsRepository = productsRepository;
    this.categoriesRepository = categoriesRepository;
  }
  async execute(slug, product_id) {
    const product = await this.productsRepository.findBySlugAndId(slug, product_id);
    if (!product) {
      throw new _AppError.default('Product does not found');
    }
    const categories = [];
    if (product.categories) {
      for (const categoryId of JSON.parse(product.categories)) {
        const category = await this.categoriesRepository.findById(categoryId);
        if (category) {
          categories.push(category);
        }
      }
      product.categories_items = categories;
    }
    return product;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexProductsService;