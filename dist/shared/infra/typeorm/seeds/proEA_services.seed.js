"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Product = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/Product"));
var _servicesData = require("./data/services-data");
var _Archive = _interopRequireDefault(require("../../../../modules/archives/infra/typeorm/entities/Archive"));
var _ProductCategory = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductCategory"));
var _getCategoriesIds = _interopRequireDefault(require("./utils/get-categories-ids"));
var _ProductAttributes = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductAttributes"));
var _ProductVariations = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductVariations"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const categoriesTarget = [['Carros', 'Manutenção'], ['Carros', 'Manutenção'], ['Salão', 'Corte de cabelo'], ['Computação', 'Formatação'], ['Computação', 'Formatação'], ['Segurança', 'Vigilancia'], ['Segurança', 'Vigilancia'], ['Salão', 'Mulheres'], ['Limpeza', 'Quimica'], ['Clinica', 'Odontologia'], ['Gerais', 'Natureza'], ['Carros', 'Luxo']];
class ServicesDatabaseSeed {
  async run(factory, connection) {
    const categories = await connection.getRepository(_ProductCategory.default).createQueryBuilder('pd101_product_categories').getMany();
    const productsWithCategories = _servicesData.servicesData.map((service, index) => {
      return {
        ...service,
        categories: (0, _getCategoriesIds.default)(categories, categoriesTarget[index])
      };
    });
    const {
      raw: services
    } = await connection.createQueryBuilder().insert().into(_Product.default).values(productsWithCategories).execute();
    const {
      raw: attributes
    } = await connection.createQueryBuilder().insert().into(_ProductAttributes.default).values(_servicesData.servicesAttributesData.map((attribute, index) => ({
      ...attribute,
      ...(index === 0 && {
        product_id: services[0].id
      }),
      ...(index === 1 && {
        product_id: services[3].id
      }),
      ...(index === 2 && {
        product_id: services[1].id
      })
    }))).execute();
    await connection.createQueryBuilder().insert().into(_ProductVariations.default).values(_servicesData.servicesVariationsData.map((variations, index) => ({
      ...variations,
      ...(index === 0 && {
        product_attr_id: attributes[0].id
      }),
      ...(index === 1 && {
        product_attr_id: attributes[0].id
      }),
      ...(index === 2 && {
        product_attr_id: attributes[1].id
      }),
      ...(index === 3 && {
        product_attr_id: attributes[1].id
      }),
      ...(index === 4 && {
        product_attr_id: attributes[2].id
      }),
      ...(index === 5 && {
        product_attr_id: attributes[2].id
      }),
      ...(index === 6 && {
        product_attr_id: attributes[2].id
      })
    }))).execute();
    const archives = Array.from({
      length: _servicesData.servicesImages.length
    }, (_, i) => i);
    for (const archive of archives) {
      await connection.createQueryBuilder().insert().into(_Archive.default).values((0, _servicesData.archivesServicesData)(archive, services[archive].id)).execute();
    }
    await connection.createQueryBuilder().insert().into(_Archive.default).values(_servicesData.archiveServicesVariantsImagesData.map((archive, index) => ({
      ...archive,
      reference_id: services[index].id,
      ...([0, 1].includes(index) && {
        reference_id: services[0].id
      }),
      ...([2, 3].includes(index) && {
        reference_id: services[3].id
      }),
      ...([4, 5, 6].includes(index) && {
        reference_id: services[1].id
      })
    }))).execute();
  }
}
exports.default = ServicesDatabaseSeed;