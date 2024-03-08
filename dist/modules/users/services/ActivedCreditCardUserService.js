"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _ICreditCardRepository = _interopRequireDefault(require("../repositories/ICreditCardRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let ActivedCreditCardUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CreditCardRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICreditCardRepository.default === "undefined" ? Object : _ICreditCardRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ActivedCreditCardUserService {
  constructor(creditCardRepository) {
    this.creditCardRepository = creditCardRepository;
  }
  async execute(id) {
    const creditCard = await this.creditCardRepository.findById(id);
    if (!creditCard) throw new _AppError.default('card credit does not exists', 404);
    const cards = await this.setSaveAndActivedCard(id);
    return cards;
  }
  async setSaveAndActivedCard(id) {
    const cards = await this.creditCardRepository.Index({
      page: 0,
      limit: 0
    });
    cards.data.forEach(async card => {
      if (card.id) {
        const newCard = {
          ...card,
          actived: id === card.id
        };
        await this.creditCardRepository.save(newCard);
      }
    });
    return cards.data;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = ActivedCreditCardUserService;