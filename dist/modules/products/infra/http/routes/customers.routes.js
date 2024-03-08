"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _celebrate = require("celebrate");
var _CustomersController = _interopRequireDefault(require("../controllers/CustomersController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const customersRouter = (0, _express.Router)();
const customersController = new _CustomersController.default();
customersRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required(),
    level: _celebrate.Joi.string(),
    phone: _celebrate.Joi.string(),
    cpf: _celebrate.Joi.string()
  }
}), customersController.create);
customersRouter.use(_ensureAuthenticated.default);
var _default = exports.default = customersRouter;