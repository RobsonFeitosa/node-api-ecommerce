"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _pagarme = _interopRequireDefault(require("pagarme"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexTransactionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class IndexTransactionService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute(user_id) {
    const user = await this.usersRepository.findById(user_id);
    if (!user) throw new _AppError.default('User not found');
    const apikeyAdmSandbox = user.settings.level === 1 ? 'ak_test_MSybjlAoZ25e3BgB5JBFGbGHBe4BBX' : process.env.PAGARME_API_KEY;
    const client = await _pagarme.default.client.connect({
      api_key: apikeyAdmSandbox
    });
    const transf = await client.transactions.all({
      count: 100000
    });
    return transf.length;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexTransactionService;