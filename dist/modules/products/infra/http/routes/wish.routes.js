"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
var _WishController = _interopRequireDefault(require("../controllers/WishController"));
require("./wish.swagger");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const wishRoute = (0, _express.Router)();
const wishController = new _WishController.default();
wishRoute.use(_ensureAuthenticated.default);
wishRoute.post('/wish/:product_id', wishController.create);
wishRoute.get('/wish/', wishController.index);
var _default = exports.default = wishRoute;