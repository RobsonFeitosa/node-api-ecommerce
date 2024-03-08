"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductCategory = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductCategory"));
var _categoriesServicesData = require("./data/categories-services-data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CategoriesServicesDatabaseSeed {
  async run(factory, connection) {
    for (const categoryData of _categoriesServicesData.categoriesServicesData) {
      const {
        sub,
        ...payload
      } = categoryData;
      const {
        raw: category
      } = await connection.createQueryBuilder().insert().into(_ProductCategory.default).values(payload).execute();
      if (category) {
        for (const subcategory of sub) {
          await connection.createQueryBuilder().insert().into(_ProductCategory.default).values({
            ...subcategory,
            parent_id: category[0].id
          }).execute();
        }
      }
    }
  }
}
exports.default = CategoriesServicesDatabaseSeed;