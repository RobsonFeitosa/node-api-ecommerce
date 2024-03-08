"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));
var _SettingsController = _interopRequireDefault(require("../controllers/SettingsController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const settingsRouter = (0, _express.Router)();
const settingsController = new _SettingsController.default();
settingsRouter.get('/:location', settingsController.show);
settingsRouter.use(_ensureAuthenticated.default);
settingsRouter.post('/', settingsController.create);
settingsRouter.put('/:location', settingsController.update);
var _default = exports.default = settingsRouter;