"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));
var _ScheduleController = _interopRequireDefault(require("../controllers/ScheduleController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const couponsRouter = (0, _express.Router)();
const scheduleController = new _ScheduleController.default();
couponsRouter.use(_ensureAuthenticated.default);
couponsRouter.post('/', scheduleController.create);
couponsRouter.delete('/:scheduleId', scheduleController.delete);
couponsRouter.get('/', scheduleController.index);
couponsRouter.get('/:scheduleId', scheduleController.show);
var _default = exports.default = couponsRouter;