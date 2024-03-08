"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateCreditCardService = _interopRequireDefault(require("../../../services/CreateCreditCardService"));
var _IndexCreditCardService = _interopRequireDefault(require("../../../services/IndexCreditCardService"));
var _ShowCreditCardService = _interopRequireDefault(require("../../../services/ShowCreditCardService"));
var _DeleteCreditCardService = _interopRequireDefault(require("../../../services/DeleteCreditCardService"));
var _ActivedCreditCardUserService = _interopRequireDefault(require("../../../services/ActivedCreditCardUserService"));
var _ShowActivedCreditCardUserService = _interopRequireDefault(require("../../../services/ShowActivedCreditCardUserService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Controller {
  async create(req, res) {
    const user_id = req.user.id;
    const createCreditCard = _tsyringe.container.resolve(_CreateCreditCardService.default);
    const card = await createCreditCard.execute({
      creditCard: {
        ...req.body,
        user_id
      }
    });
    return res.json(card);
  }
  async index(req, res) {
    const {
      page = 1,
      limit = 999999
    } = req.query;
    const user_id = req.user.id;
    const indexCreditCard = _tsyringe.container.resolve(_IndexCreditCardService.default);
    const card = await indexCreditCard.execute({
      page: Number(page),
      limit: Number(limit)
    }, user_id);
    return res.json(card);
  }
  async show(req, res) {
    const {
      cardId
    } = req.params;
    const showCard = _tsyringe.container.resolve(_ShowCreditCardService.default);
    const card = await showCard.execute(cardId);
    return res.json(card);
  }
  async delete(req, res) {
    const {
      cardId
    } = req.params;
    const deleteCard = _tsyringe.container.resolve(_DeleteCreditCardService.default);
    await deleteCard.execute(cardId);
    return res.status(204).send();
  }
  async updateActived(request, response) {
    const activedCard = _tsyringe.container.resolve(_ActivedCreditCardUserService.default);
    const {
      cardId
    } = request.params;
    const transaction = await activedCard.execute(cardId);
    return response.json(transaction);
  }
  async showActived(request, response) {
    const activedCard = _tsyringe.container.resolve(_ShowActivedCreditCardUserService.default);
    const userId = request.user.id;
    const transaction = await activedCard.execute({
      userId
    });
    return response.json(transaction);
  }
}
exports.default = Controller;