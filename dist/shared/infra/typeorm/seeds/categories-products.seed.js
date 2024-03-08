"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductCategory = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductCategory"));
var _categoriesProductsData = require("./data/categories-products-data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CategoriesProductsDatabaseSeed {
  async run(factory, connection) {
    for (const categoryData of _categoriesProductsData.categoriesProductsData) {
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
exports.default = CategoriesProductsDatabaseSeed;