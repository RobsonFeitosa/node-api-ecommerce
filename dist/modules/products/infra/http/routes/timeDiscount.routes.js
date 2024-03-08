"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _TimeDiscountController = _interopRequireDefault(require("../controllers/TimeDiscountController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const timeDiscountRouter = (0, _express.Router)();
const timeDiscountController = new _TimeDiscountController.default();
timeDiscountRouter.use(_ensureAuthenticated.default);
timeDiscountRouter.post('/', timeDiscountController.create);
timeDiscountRouter.put('/:timeDiscountId', timeDiscountController.update);
timeDiscountRouter.delete('/:timeDiscountId', timeDiscountController.delete);
timeDiscountRouter.get('/options-products', timeDiscountController.indexOptionsProducts);
timeDiscountRouter.get('/', timeDiscountController.index);
timeDiscountRouter.get('/:timeDiscountId', timeDiscountController.show);
var _default = exports.default = timeDiscountRouter;