"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ProvidersController = _interopRequireDefault(require("../controllers/ProvidersController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const providersRouter = (0, _express.Router)();
const providersController = new _ProvidersController.default();
providersRouter.use(_ensureAuthenticated.default);
providersRouter.post('/providers', providersController.create);
providersRouter.put('/providers/:providerId', providersController.update);
providersRouter.delete('/providers/:providerId', providersController.delete);
providersRouter.get('/providers', providersController.index);
providersRouter.get('/providers/:providerId', providersController.show);
var _default = exports.default = providersRouter;