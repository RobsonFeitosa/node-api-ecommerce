"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _upload = _interopRequireDefault(require("../../../../../config/upload"));
var _ProductsVariationsController = _interopRequireDefault(require("../controllers/ProductsVariationsController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productsVariationsRouter = (0, _express.Router)();
const productsVariationsController = new _ProductsVariationsController.default();
productsVariationsRouter.use(_ensureAuthenticated.default);
const upload = (0, _multer.default)(_upload.default.multer);
productsVariationsRouter.post('/attributes/:attributeId/variations', productsVariationsController.create);
productsVariationsRouter.get('/attributes/:attributeId/variations/:variationId', productsVariationsController.show);
productsVariationsRouter.put('/attributes/:attributeId/variations/:variationId', productsVariationsController.update);
productsVariationsRouter.delete('/attributes/:attributeId/variations/:variationId', productsVariationsController.delete);
var _default = exports.default = productsVariationsRouter;