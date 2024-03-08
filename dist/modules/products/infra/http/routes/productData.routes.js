"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ProductsDataController = _interopRequireDefault(require("../controllers/ProductsDataController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productsDataRouter = (0, _express.Router)();
const productsDataController = new _ProductsDataController.default();
productsDataRouter.use(_ensureAuthenticated.default);
productsDataRouter.post('/:productId/data', productsDataController.create);
productsDataRouter.put('/data/:id', productsDataController.update);
productsDataRouter.delete('/data/:id', productsDataController.delete);
var _default = exports.default = productsDataRouter;