"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ICreditCardRepository = _interopRequireDefault(require("../repositories/ICreditCardRepository"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexCardService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CreditCardRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ICreditCardRepository.default === "undefined" ? Object : _ICreditCardRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class IndexCardService {
  constructor(creditCardRepository, usersRepository) {
    this.creditCardRepository = creditCardRepository;
    this.usersRepository = usersRepository;
  }
  async execute(options, userId) {
    const user = await this.usersRepository.findById(userId);
    if (!user) throw new _AppError.default('User not found');
    const cards = await this.creditCardRepository.Index(options, userId);
    return cards;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexCardService;