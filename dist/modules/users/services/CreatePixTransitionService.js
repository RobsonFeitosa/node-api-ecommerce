"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IUserTransactionsRepository = _interopRequireDefault(require("../repositories/IUserTransactionsRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreatePixTransactionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserTransactionsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserTransactionsRepository.default === "undefined" ? Object : _IUserTransactionsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreatePixTransactionService {
  constructor(userTransactionsRepository) {
    this.userTransactionsRepository = userTransactionsRepository;
  }
  async execute({
    user_id,
    data
  }) {
    const userTransaction = await this.userTransactionsRepository.create({
      user_id,
      amount: data.amount,
      brand: data.brand,
      order_id: data.order_id,
      payment_method: 'pix',
      status: data.status,
      tid: data.tid
    });
    return userTransaction;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = CreatePixTransactionService;