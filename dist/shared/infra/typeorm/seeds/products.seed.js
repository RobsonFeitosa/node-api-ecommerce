"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Product = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/Product"));
var _productsData = require("./data/products-data");
var _ProductCategory = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductCategory"));
var _Archive = _interopRequireDefault(require("../../../../modules/archives/infra/typeorm/entities/Archive"));
var _getCategoriesIds = _interopRequireDefault(require("./utils/get-categories-ids"));
var _TimeDiscount = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/TimeDiscount"));
var _timeDiscountData = require("./data/time-discount-data");
var _ProductData = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductData"));
var _ProductAttributes = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductAttributes"));
var _ProductVariations = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductVariations"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const categoriesTarget = [['Eletronicos', 'Computador'], ['Games e console', 'Cadeiras'], ['Beleza', 'Perfumes'], ['Jogos e brinquedos', 'Brinquedos de montar'], ['Jogos e brinquedos', 'Brinquedos de controle remoto'], ['Livros', 'Didadicos  e acadêmicos'], ['Jogos e brinquedos', 'Armas de brinquedo'], ['Eletrodomésticos', 'Cozinha'], ['Ambientes', 'Cama, Mesa e Banho'], ['Ferramentas', 'Eletrica'], ['Ferramentas', 'Eletrica'], ['Ambientes', 'Cama, Mesa e Banho'], ['Ferramentas', 'Eletrica'], ['Ferramentas', 'Eletrica'], ['Eletronicos', 'Tablets e celulares'], ['Eletronicos', 'Sons, Câmeras e acessórios'], ['Eletronicos', 'Sons, Câmeras e acessórios'], ['Eletronicos', 'Sons, Câmeras e acessórios'], ['Eletronicos', 'Sons, Câmeras e acessórios'], ['Eletronicos', 'TVs']];
const archivesProducts = Array.from({
  length: _productsData.productsImagesData.length
}, (_, i) => i);
const archivesVariations = Array.from({
  length: _productsData.productsVariationsData.length
}, (_, i) => i);
class ProductsDatabaseSeed {
  async run(factory, connection) {
    const categories = await connection.getRepository(_ProductCategory.default).createQueryBuilder('pd101_product_categories').getMany();
    const {
      raw: timeDiscount
    } = await connection.createQueryBuilder().insert().into(_TimeDiscount.default).values(_timeDiscountData.timeDiscountData).execute();
    const productsWithCategories = _productsData.productsData.map((product, index) => {
      if (index === 3) {
        product.time_discount_id = timeDiscount[0].id;
      }
      if (index === 4) {
        product.time_discount_id = timeDiscount[0].id;
      }
      if (index === 7) {
        product.time_discount_id = timeDiscount[1].id;
      }
      if (index === 19) {
        product.time_discount_id = timeDiscount[2].id;
      }
      if (index === 11) {
        product.time_discount_id = timeDiscount[3].id;
      }
      if (index === 13) {
        product.time_discount_id = timeDiscount[4].id;
      }
      return {
        ...product,
        categories: (0, _getCategoriesIds.default)(categories, categoriesTarget[index])
      };
    });
    const {
      raw: products
    } = await connection.createQueryBuilder().insert().into(_Product.default).values(productsWithCategories).execute();
    await connection.createQueryBuilder().insert().into(_ProductData.default).values(_productsData.productsSettingsData.map((product, index) => ({
      ...product,
      product_id: products[index].id,
      dimensions: JSON.stringify(product.dimensions)
    }))).execute();
    const {
      raw: attributes
    } = await connection.createQueryBuilder().insert().into(_ProductAttributes.default).values(_productsData.productsAttributesData.map((attribute, index) => ({
      ...attribute,
      ...(index === 0 && {
        product_id: products[4].id
      }),
      ...(index === 1 && {
        product_id: products[6].id
      }),
      ...(index === 2 && {
        product_id: products[3].id
      })
    }))).execute();
    await connection.createQueryBuilder().insert().into(_ProductVariations.default).values(_productsData.productsVariationsData.map((variations, index) => ({
      ...variations,
      ...(index === 0 && {
        product_attr_id: attributes[0].id
      }),
      ...(index === 1 && {
        product_attr_id: attributes[0].id
      }),
      ...(index === 2 && {
        product_attr_id: attributes[0].id
      }),
      ...(index === 3 && {
        product_attr_id: attributes[1].id
      }),
      ...(index === 4 && {
        product_attr_id: attributes[1].id
      }),
      ...(index === 5 && {
        product_attr_id: attributes[2].id
      }),
      ...(index === 6 && {
        product_attr_id: attributes[2].id
      }),
      ...(index === 7 && {
        product_attr_id: attributes[2].id
      }),
      ...(index === 8 && {
        product_attr_id: attributes[2].id
      })
    }))).execute();
    for (const archive of archivesProducts) {
      await connection.createQueryBuilder().insert().into(_Archive.default).values((0, _productsData.archivesProductsData)(archive, products[archive].id)).execute();
    }
    await connection.createQueryBuilder().insert().into(_Archive.default).values(_productsData.archiveVariantsProductsImagesData.map((archive, index) => ({
      ...archive,
      reference_id: products[index].id,
      ...([0, 1, 2].includes(index) && {
        reference_id: products[4].id
      }),
      ...([3, 4].includes(index) && {
        reference_id: products[6].id
      }),
      ...([5, 6, 7].includes(index) && {
        reference_id: products[3].id
      })
    }))).execute();
  }
}
exports.default = ProductsDatabaseSeed;