"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _pagarme = _interopRequireDefault(require("pagarme"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _ICreditCardRepository = _interopRequireDefault(require("../repositories/ICreditCardRepository"));
var _IUserTransactionsRepository = _interopRequireDefault(require("../repositories/IUserTransactionsRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateTransactionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('CreditCardRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('UserTransactionsRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _ICreditCardRepository.default === "undefined" ? Object : _ICreditCardRepository.default, typeof _IUserTransactionsRepository.default === "undefined" ? Object : _IUserTransactionsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CreateTransactionService {
  constructor(usersRepository, creditCardRepository, userTransactionsRepository) {
    this.usersRepository = usersRepository;
    this.creditCardRepository = creditCardRepository;
    this.userTransactionsRepository = userTransactionsRepository;
  }
  async execute({
    user_id,
    transaction
  }) {
    const user = await this.usersRepository.findById(user_id);
    if (!user) throw new _AppError.default('User not found');
    const {
      card_hash,
      card_id
    } = transaction;
    let card;
    if (card_id) {
      card = await this.creditCardRepository.findByCardId(card_id);
      if (!card) throw new _AppError.default('Card not found');
    }
    const apikeyAdmSandbox = user.settings.level === 1 ? 'ak_test_MSybjlAoZ25e3BgB5JBFGbGHBe4BBX' : process.env.PAGARME_API_KEY;
    const client = await _pagarme.default.client.connect({
      api_key: apikeyAdmSandbox
    });
    const {
      order_id,
      ...transactionPayload
    } = transaction;
    const pagarmeTransaction = await client.transactions.create({
      ...transactionPayload,
      ...(card_hash ? {
        card_hash
      } : {
        card_id: card?.card_id
      })
    });
    const userTransaction = await this.userTransactionsRepository.create({
      user_id,
      amount: transaction.amount,
      brand: pagarmeTransaction.card_brand,
      order_id,
      payment_method: 'credit-card',
      status: pagarmeTransaction.status,
      tid: pagarmeTransaction.id
    });
    return {
      transaction: userTransaction,
      user_id: user.id
    };
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateTransactionService;