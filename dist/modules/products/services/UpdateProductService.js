"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _slug = _interopRequireDefault(require("slug"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _ICategoriesRepository = _interopRequireDefault(require("../repositories/ICategoriesRepository"));
var _IProductDataRepository = _interopRequireDefault(require("../repositories/IProductDataRepository"));
var _IProductAttributesRepository = _interopRequireDefault(require("../repositories/IProductAttributesRepository"));
var _IProductVariationsRespository = _interopRequireDefault(require("../repositories/IProductVariationsRespository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateProductService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductDataRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('ProductAttributesRepository')(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)('CategoriesRepository')(target, undefined, 3);
}, _dec6 = function (target, key) {
  return (0, _tsyringe.inject)('ProductVariationsRespository')(target, undefined, 4);
}, _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default, typeof _IProductDataRepository.default === "undefined" ? Object : _IProductDataRepository.default, typeof _IProductAttributesRepository.default === "undefined" ? Object : _IProductAttributesRepository.default, typeof _ICategoriesRepository.default === "undefined" ? Object : _ICategoriesRepository.default, typeof _IProductVariationsRespository.default === "undefined" ? Object : _IProductVariationsRespository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = class UpdateProductService {
  constructor(productsRepository, productDataRepository, productAttributesRepository, categoriesRepository, productVariationsRespository) {
    this.productsRepository = productsRepository;
    this.productDataRepository = productDataRepository;
    this.productAttributesRepository = productAttributesRepository;
    this.categoriesRepository = categoriesRepository;
    this.productVariationsRespository = productVariationsRespository;
  }
  async execute(payload) {
    const {
      productId,
      ...rest
    } = payload;
    const product = await this.productsRepository.findById(productId);
    if (!product) {
      throw new _AppError.default('This product does not exist');
    }
    if (payload.categories) {
      const {
        categories
      } = payload;
      for (const categoryId of categories) {
        const category = await this.categoriesRepository.findById(categoryId);
        if (!category) {
          throw new _AppError.default('Category not found.');
        }
      }
    }
    if (payload.product_data) {
      const {
        product_data
      } = payload;
      if (product_data.id) {
        const productData = await this.productDataRepository.findById(product.product_data.id);
        if (!productData) {
          throw new _AppError.default('Product settings not found.');
        }
        productData.quantity = product_data.quantity;
        productData.sku = product_data.sku;
        productData.weight = product_data.weight;
        productData.code_bar = product_data.code_bar;
        productData.dimensions = JSON.stringify(product_data.dimensions);
        await this.productDataRepository.save(productData);
      } else {
        const productData = await this.productDataRepository.create({
          code_bar: product_data.code_bar,
          dimensions: product_data.dimensions,
          quantity: product_data.quantity,
          sku: product_data.sku,
          weight: product_data.weight,
          product_id: product.id
        });
        product.product_data = productData;
      }
    }
    if (payload.attributes) {
      const {
        attributes
      } = payload;
      const newAttributes = [];
      for (const attribute of attributes) {
        const attributeIdSaved = attribute.id;
        if (attributeIdSaved) {
          const attr = await this.productAttributesRepository.findById(attributeIdSaved);
          if (!attr) {
            throw new _AppError.default('Attribute not found.');
          }
          attr.name = attribute.name;
          attr.options = JSON.stringify(attribute.options);
          await this.productAttributesRepository.save(attr);
          if (attr.variations) {
            // const newVariations: ProductVariations[] = []
            for (const variation of attribute.variations) {
              if (variation.id) {
                const varr = await this.productVariationsRespository.findById(variation.id);
                if (varr) {
                  varr.name = variation.name;
                  varr.quantity = variation.quantity;
                  varr.sku = variation.sku;
                  varr.weight = variation.weight;
                  varr.actived = variation.actived;
                  varr.time = variation.time;
                  varr.dimensions = JSON.stringify(variation.dimensions);

                  // newVariations.push(varr)

                  await this.productVariationsRespository.save(varr);
                }
              } else {
                const newVar = await this.productVariationsRespository.create(variation);
                // newVariations.push(newVar)

                attr.variations.push(newVar);
              }
            }

            // attr.variations = newVariations
          }
          newAttributes.push(attr);
        } else {
          attribute.product_id = product.id;
          const {
            variations,
            ...rest
          } = attribute;
          const attributeSaved = await this.productAttributesRepository.create(rest);
          if (attributeSaved) {
            const newVariations = [];
            for (const variation of variations) {
              variation.product_attr_id = attributeSaved.id;
              const varr = await this.productVariationsRespository.create(variation);
              if (varr) {
                newVariations.push(varr);
              }
            }
            attribute.variations = newVariations;
            newAttributes.push(attributeSaved);
          }
        }
      }
      product.attributes = newAttributes;
    }
    product.name = rest.name;
    product.price = rest.price;
    product.visibility = rest.visibility;
    product.published = rest.published;
    product.emphasis = rest.emphasis;
    product.slug = (0, _slug.default)(rest.name);
    if (rest.old_price) product.old_price = rest.old_price;
    product.cod_product = rest.cod_product;
    product.mode_data = rest.mode_data;
    product.description = rest.description;
    product.short_description = rest.short_description;
    product.categories = JSON.stringify(payload.categories);
    await this.productsRepository.save(product);
    return product;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateProductService;