"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
var _ProductsAttributesController = _interopRequireDefault(require("../controllers/ProductsAttributesController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productsAttrRouter = (0, _express.Router)();
const productsAttributesController = new _ProductsAttributesController.default();
productsAttrRouter.use(_ensureAuthenticated.default);
productsAttrRouter.post('/:productId/attributes', productsAttributesController.create);
productsAttrRouter.put('/:productId/attributes/:attributeId', productsAttributesController.update);
productsAttrRouter.get('/:productId/attributes', productsAttributesController.index);
productsAttrRouter.delete('/:productId/attributes/:id', productsAttributesController.delete);
var _default = exports.default = productsAttrRouter;