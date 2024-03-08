"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _CreditCard = _interopRequireDefault(require("../entities/CreditCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreditCardRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_CreditCard.default);
  }
  async create(creditData) {
    const card = this.ormRepository.create(creditData);
    await this.ormRepository.save(card);
    return card;
  }
  async findById(cardId) {
    const card = await this.ormRepository.findOne({
      where: {
        card_id: cardId
      }
    });
    return card;
  }
  async findByCardId(id) {
    const card = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return card;
  }
  async findActived(userId) {
    const card = await this.ormRepository.findOne({
      where: {
        user_id: userId,
        actived: true
      }
    });
    return card;
  }
  async findByUserId(userId) {
    const card = await this.ormRepository.findOne({
      where: {
        user_id: userId
      }
    });
    return card;
  }
  async findByNumber(number) {
    const card = await this.ormRepository.findOne({
      where: {
        number
      }
    });
    return card;
  }
  async Index(options, userId) {
    const data = await this.ormRepository.findAndCount({
      skip: (options.page - 1) * options.limit,
      take: options.limit,
      where: {
        user_id: userId
      },
      order: {
        created_at: 'ASC'
      },
      cache: true
    });
    return {
      total: data[1],
      data: data[0]
    };
  }
  async delete(id) {
    const card = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (card) {
      this.ormRepository.remove(card);
    }
  }
  async save(creditData) {
    return this.ormRepository.save(creditData);
  }
}
var _default = exports.default = CreditCardRepository;