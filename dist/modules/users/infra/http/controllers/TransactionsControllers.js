"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateTransactionService = _interopRequireDefault(require("../../../services/CreateTransactionService"));
var _IndexTransactionService = _interopRequireDefault(require("../../../services/IndexTransactionService"));
var _IndexCountTransactionsService = _interopRequireDefault(require("../../../services/IndexCountTransactionsService"));
var _UpdateStatusUserTransactionsService = _interopRequireDefault(require("../../../services/UpdateStatusUserTransactionsService"));
var _CreatePixTransitionService = _interopRequireDefault(require("../../../services/CreatePixTransitionService"));
var _ShowTransactionService = _interopRequireDefault(require("../../../services/ShowTransactionService"));
var _classTransformer = require("class-transformer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TransactionsController {
  async create(req, res) {
    const userId = req.user.id;
    const crateTransaction = _tsyringe.container.resolve(_CreateTransactionService.default);
    const transaction = await crateTransaction.execute({
      user_id: userId,
      transaction: req.body
    });
    return res.json(transaction);
  }
  async createPix(req, res) {
    const userId = req.user.id;
    const createTransaction = _tsyringe.container.resolve(_CreatePixTransitionService.default);
    const transaction = await createTransaction.execute({
      user_id: userId,
      data: req.body
    });
    return res.json(transaction);
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const indexTransactions = _tsyringe.container.resolve(_IndexTransactionService.default);
    const transaction = await indexTransactions.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(transaction));
  }
  async show(request, response) {
    const {
      idTransaction
    } = request.params;
    const showTransactions = _tsyringe.container.resolve(_ShowTransactionService.default);
    const transaction = await showTransactions.execute(idTransaction);
    return response.json(transaction);
  }
  async indexCount(request, response) {
    const indexTransactions = _tsyringe.container.resolve(_IndexCountTransactionsService.default);
    const transaction = await indexTransactions.execute(request.user.id);
    return response.json(transaction);
  }
  async update(request, response) {
    const {
      idTransaction
    } = request.params;
    const {
      status
    } = request.body;
    const updateTransactions = _tsyringe.container.resolve(_UpdateStatusUserTransactionsService.default);
    const transaction = await updateTransactions.execute({
      status,
      idTransaction
    });
    return response.json(transaction);
  }
}
exports.default = TransactionsController;