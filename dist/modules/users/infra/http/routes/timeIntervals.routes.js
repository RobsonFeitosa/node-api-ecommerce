"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _TimeIntervalsController = _interopRequireDefault(require("../controllers/TimeIntervalsController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const timeIntervalsRouter = (0, _express.Router)();
const timeIntervalsController = new _TimeIntervalsController.default();
timeIntervalsRouter.use(_ensureAuthenticated.default);
timeIntervalsRouter.post('/time-intervals', timeIntervalsController.create);
timeIntervalsRouter.put('/:professionalId/time-intervals', timeIntervalsController.update);
timeIntervalsRouter.get('/time-intervals/:timeIntervalId', timeIntervalsController.show);
timeIntervalsRouter.get('/time-intervals/blocked-dates/:professionalId', timeIntervalsController.showBlockedDates);
timeIntervalsRouter.get('/time-intervals/availables/:professionalId', timeIntervalsController.showAvailablesProfessionalsDates);
timeIntervalsRouter.get('/time-intervals', timeIntervalsController.index);
timeIntervalsRouter.delete('/time-intervals/:timeIntervalId', timeIntervalsController.delete);
var _default = exports.default = timeIntervalsRouter;