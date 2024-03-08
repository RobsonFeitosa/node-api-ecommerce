"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/User"));
var _UserSettings = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/UserSettings"));
var _tsyringe = require("tsyringe");
var _BCryptHashProvider = _interopRequireDefault(require("../../../../modules/users/providers/HashProvider/implementations/BCryptHashProvider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const hashProvider = _tsyringe.container.resolve(_BCryptHashProvider.default);
class InitialDatabaseSeed {
  async run(factory, connection) {
    const setting = await factory(_UserSettings.default)().create();
    const hashedPassword = await hashProvider.generateHash('123123');
    await factory(_User.default)().create({
      settings: setting,
      password: hashedPassword
    });
  }
}
exports.default = InitialDatabaseSeed;