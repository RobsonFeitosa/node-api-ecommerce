"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ActivedSendEmailAccountController = _interopRequireDefault(require("../controllers/ActivedSendEmailAccountController"));
var _ActivedConfirmAccountController = _interopRequireDefault(require("../controllers/ActivedConfirmAccountController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const accountRouter = (0, _express.Router)();
const activedSendEmailAccountController = new _ActivedSendEmailAccountController.default();
const activedConfirmAccountController = new _ActivedConfirmAccountController.default();
accountRouter.post('/sendmail', activedSendEmailAccountController.create);
accountRouter.post('/confirm', activedConfirmAccountController.create);
var _default = exports.default = accountRouter;