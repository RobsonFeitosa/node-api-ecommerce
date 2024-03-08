"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/User"));
var _BCryptHashProvider = _interopRequireDefault(require("../../../../modules/users/providers/HashProvider/implementations/BCryptHashProvider"));
var _tsyringe = require("tsyringe");
var _ProductWish = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/ProductWish"));
var _Product = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/Product"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const hashProvider = _tsyringe.container.resolve(_BCryptHashProvider.default);
function getTeamId(teams, name) {
  const team = teams.find(t => name === t.name);
  if (!team) {
    return '';
  }
  return team.id;
}
const wishes = Array.from({
  length: 10
}, (_, i) => i);
class WishDatabaseSeed {
  async run(factory, connection) {
    const products = await connection.getRepository(_Product.default).createQueryBuilder('pd100_product').getMany();
    const userMaster = await connection.getRepository(_User.default).createQueryBuilder('users').leftJoinAndSelect('users.settings', 'settings').where('settings.level = :level', {
      level: '1'
    }).getMany();
    await connection.createQueryBuilder().insert().into(_ProductWish.default).values(wishes.map(index => ({
      user_id: userMaster[0].id,
      product_id: products[index].id
    }))).execute();
  }
}
exports.default = WishDatabaseSeed;