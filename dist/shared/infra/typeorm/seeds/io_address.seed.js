"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Address = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/Address"));
var _addressData = require("./data/address-data");
var _User = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AddressDatabaseSeed {
  async run(factory, connection) {
    const userMaster = await connection.getRepository(_User.default).createQueryBuilder('users').leftJoinAndSelect('users.settings', 'settings').where('settings.level = :level', {
      level: '1'
    }).getMany();
    await connection.createQueryBuilder().insert().into(_Address.default).values(_addressData.addressData.map(a => ({
      ...a,
      user: userMaster[0]
    }))).execute();
  }
}
exports.default = AddressDatabaseSeed;