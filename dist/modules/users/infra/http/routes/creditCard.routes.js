"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _CreditCardController = _interopRequireDefault(require("../controllers/CreditCardController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cardRouter = (0, _express.Router)();
const creditCardController = new _CreditCardController.default();
cardRouter.use(_ensureAuthenticated.default);
cardRouter.post('/', creditCardController.create);
cardRouter.get('/', creditCardController.index);
cardRouter.delete('/:cardId', creditCardController.delete);
cardRouter.get('/actived', creditCardController.showActived);
cardRouter.patch('/actived/:cardId', creditCardController.updateActived);
cardRouter.get('/:cardId', creditCardController.show);
var _default = exports.default = cardRouter;