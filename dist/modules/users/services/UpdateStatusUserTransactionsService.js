"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _path = _interopRequireDefault(require("path"));
var _IUserTransactionsRepository = _interopRequireDefault(require("../repositories/IUserTransactionsRepository"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IMailProvider = _interopRequireDefault(require("../../../shared/container/providers/MailProvider/models/IMailProvider"));
var _formatValue = _interopRequireDefault(require("../../utils/formatValue"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateStatusUserTransactionsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserTransactionsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUserTransactionsRepository.default === "undefined" ? Object : _IUserTransactionsRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class UpdateStatusUserTransactionsService {
  constructor(userTransactionsRepository, usersRepository, mailProvider) {
    this.userTransactionsRepository = userTransactionsRepository;
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }
  async execute({
    status,
    idTransaction
  }) {
    const transaction = await this.userTransactionsRepository.findById(idTransaction);
    if (!transaction) throw new _AppError.default('Transaction not found');
    transaction.status = status;
    await this.sendEmail(transaction);
    await this.userTransactionsRepository.save(transaction);
    return transaction;
  }
  async sendEmail(transaction) {
    const user = await this.usersRepository.findById(transaction.user_id);
    if (!user) throw new _AppError.default('User does not exists.');
    const template = _path.default.resolve(__dirname, '..', 'views', 'receipt.hbs');
    const idOrder = transaction.order_id.substr(0, 11);
    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email
      },
      subject: `[LemonadeTechnologies] Recibo - ${idOrder}`,
      templateData: {
        file: template,
        variables: {
          name: user.name,
          total: (0, _formatValue.default)(transaction.amount / 100),
          idOrder,
          discount: 0,
          netTotal: (0, _formatValue.default)(transaction.amount / 100)
        }
      }
    });
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateStatusUserTransactionsService;