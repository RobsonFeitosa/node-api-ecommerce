"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ProductsController = _interopRequireDefault(require("../controllers/ProductsController"));
var _upload = _interopRequireDefault(require("../../../../../config/upload"));
require("./products.swagger");
var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productsRouter = (0, _express.Router)();
const productsController = new _ProductsController.default();
const upload = (0, _multer.default)(_upload.default.multer);
productsRouter.get('/', productsController.index);
productsRouter.get('/:slug/code/:product_id', productsController.show);
productsRouter.delete('/:productId', productsController.delete);
productsRouter.get('/emphasis', productsController.showEmphasis);
// productsRouter.get(
//   '/time-discounts/options-products',
//   productsController.indexTimeDiscountsOptions,
// )

productsRouter.post('/shipping-deadline', productsController.createShippingDeadline);
productsRouter.use(_ensureAuthenticated.default);
productsRouter.post('/', productsController.create);
productsRouter.put('/:productId', productsController.update);
productsRouter.patch('/:productId/time-discount-remove', productsController.updateRemoveTimeDiscount);
productsRouter.patch('/:productId/image', upload.single('image'), productsController.updateImagePrimary);
var _default = exports.default = productsRouter;