"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _uuidv = require("uuidv4");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _slug = _interopRequireDefault(require("slug"));
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _IProductDataRepository = _interopRequireDefault(require("../repositories/IProductDataRepository"));
var _IProductAttributesRepository = _interopRequireDefault(require("../repositories/IProductAttributesRepository"));
var _ICategoriesRepository = _interopRequireDefault(require("../repositories/ICategoriesRepository"));
var _IProductVariationsRespository = _interopRequireDefault(require("../repositories/IProductVariationsRespository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateProductService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductDataRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('ProductAttributesRepository')(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)('CategoriesRepository')(target, undefined, 3);
}, _dec6 = function (target, key) {
  return (0, _tsyringe.inject)('ProductVariationsRespository')(target, undefined, 4);
}, _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default, typeof _IProductDataRepository.default === "undefined" ? Object : _IProductDataRepository.default, typeof _IProductAttributesRepository.default === "undefined" ? Object : _IProductAttributesRepository.default, typeof _ICategoriesRepository.default === "undefined" ? Object : _ICategoriesRepository.default, typeof _IProductVariationsRespository.default === "undefined" ? Object : _IProductVariationsRespository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = class CreateProductService {
  constructor(productsRepository, productDataRepository, productAttributesRepository, categoriesRepository, productVariationsRespository) {
    this.productsRepository = productsRepository;
    this.productDataRepository = productDataRepository;
    this.productAttributesRepository = productAttributesRepository;
    this.categoriesRepository = categoriesRepository;
    this.productVariationsRespository = productVariationsRespository;
  }
  async execute(data) {
    const {
      product_data,
      attributes,
      type = 'product',
      ...rest
    } = data;
    const checkProductExist = await this.productsRepository.findByName(rest.name);
    if (checkProductExist) {
      throw new _AppError.default('Product item already used.');
    }
    if (rest.old_price && rest.price) {
      if (rest.old_price <= rest.price) {
        throw new _AppError.default('the value must be less than the discount price');
      }
    }
    if (rest.categories) {
      for (const categoryId of rest.categories) {
        const category = await this.categoriesRepository.findById(categoryId);
        if (!category) {
          throw new _AppError.default('Category not found.');
        }
      }
    }
    const product = await this.productsRepository.create({
      ...rest,
      type,
      cod_product: (0, _uuidv.uuid)(),
      categories: JSON.stringify(rest.categories),
      slug: (0, _slug.default)(data.name)
    });
    if (product_data) {
      const productData = await this.productDataRepository.create({
        ...product_data,
        product_id: product.id
      });
      product.product_data = productData;
    }
    const createAttrs = [];
    if (attributes) {
      for (const productAttr of attributes) {
        productAttr.product_id = product.id;
        const {
          variations,
          ...rest
        } = productAttr;
        const createAttr = await this.productAttributesRepository.create(rest);
        createAttrs.push(createAttr);
        const createVariations = [];
        for (const variation of variations) {
          const createVar = await this.productVariationsRespository.create({
            ...variation,
            product_attr_id: createAttr.id
          });
          createVariations.push(createVar);
        }
        createAttr.variations = createVariations;
      }
      product.attributes = createAttrs;
    }
    return product;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateProductService;