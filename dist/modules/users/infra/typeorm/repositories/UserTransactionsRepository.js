"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _UserTransactions = _interopRequireDefault(require("../entities/UserTransactions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserTransactionsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_UserTransactions.default);
  }
  async create(settingsData) {
    const Transactions = this.ormRepository.create(settingsData);
    await this.ormRepository.save(Transactions);
    return Transactions;
  }
  async findById(id) {
    const user = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return user;
  }
  async findAndCount(options) {
    const builder = this.ormRepository.createQueryBuilder('user_transactions');
    const total = await builder.getCount();
    if (options.page && options.limit) {
      const data = await builder.skip((options.page - 1) * options.limit).leftJoinAndSelect('user_transactions.order', 'orders').leftJoinAndSelect('user_transactions.user', 'users').addOrderBy('user_transactions.created_at', 'DESC').take(options.limit).getMany();
      return {
        total,
        data
      };
    }
    const data = await builder.getMany();
    return {
      total,
      data
    };
  }
  async save(Transaction) {
    return this.ormRepository.save(Transaction);
  }
}
var _default = exports.default = UserTransactionsRepository;