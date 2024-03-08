"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _AddressController = _interopRequireDefault(require("../controllers/AddressController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const addressRouter = (0, _express.Router)();
const addressController = new _AddressController.default();
addressRouter.use(_ensureAuthenticated.default);
addressRouter.post('/', addressController.create);
addressRouter.get('/profile', addressController.show);
addressRouter.get('/', addressController.index);
addressRouter.put('/:addressId', addressController.update);
addressRouter.patch('/primary/:addressId', addressController.updatePrimary);
var _default = exports.default = addressRouter;