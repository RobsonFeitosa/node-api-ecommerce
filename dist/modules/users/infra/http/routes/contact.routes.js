"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ContactController = _interopRequireDefault(require("../controllers/ContactController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const passwordRouter = (0, _express.Router)();
const contactController = new _ContactController.default();
passwordRouter.post('/', contactController.create);
var _default = exports.default = passwordRouter;