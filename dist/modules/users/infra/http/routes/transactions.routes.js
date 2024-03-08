"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _TransactionsControllers = _interopRequireDefault(require("../controllers/TransactionsControllers"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const transactionsRouter = (0, _express.Router)();
const transactionsControllers = new _TransactionsControllers.default();
transactionsRouter.use(_ensureAuthenticated.default);
transactionsRouter.post('/', transactionsControllers.create);
transactionsRouter.get('/', transactionsControllers.index);
transactionsRouter.get('/:idTransaction', transactionsControllers.show);
transactionsRouter.get('/count', transactionsControllers.indexCount);
transactionsRouter.put('/:idTransaction', transactionsControllers.update);
transactionsRouter.post('/pix', transactionsControllers.createPix);
var _default = exports.default = transactionsRouter;