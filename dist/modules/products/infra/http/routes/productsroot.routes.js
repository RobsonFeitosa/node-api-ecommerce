"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ProductsController = _interopRequireDefault(require("../controller/ProductsController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productsRootRouter = (0, _express.Router)();
const productsController = new _ProductsController.default();
productsRootRouter.get('/:slug/:product_id', productsController.show);
var _default = exports.default = productsRootRouter;