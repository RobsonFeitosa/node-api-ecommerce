"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _providersData = require("./data/providers-data");
var _ProductProvider = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductProvider"));
var _Archive = _interopRequireDefault(require("../../../../modules/archives/infra/typeorm/entities/Archive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProvidersDatabaseSeed {
  async run(factory, connection) {
    const {
      raw: providers
    } = await connection.createQueryBuilder().insert().into(_ProductProvider.default).values(_providersData.providersData).execute();
    await connection.createQueryBuilder().insert().into(_Archive.default).values(_providersData.archiveProvidersData.map((archive, index) => ({
      ...archive,
      reference_id: providers[index].id
    }))).execute();
  }
}
exports.default = ProvidersDatabaseSeed;