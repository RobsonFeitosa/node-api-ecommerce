"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _UserToken = _interopRequireDefault(require("../entities/UserToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserTokensRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_UserToken.default);
  }
  async findByToken(token) {
    const userToken = await this.ormRepository.findOne({
      where: {
        token
      }
    });
    return userToken;
  }
  async generate(user_id) {
    const userToken = this.ormRepository.create({
      user_id
    });
    await this.ormRepository.save(userToken);
    return userToken;
  }
}
var _default = exports.default = UserTokensRepository;