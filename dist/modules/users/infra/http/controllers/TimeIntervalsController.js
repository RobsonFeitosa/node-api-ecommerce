"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateTimeIntervalsService = _interopRequireDefault(require("../../../services/CreateTimeIntervalsService"));
var _IndexTimeIntervalsService = _interopRequireDefault(require("../../../services/IndexTimeIntervalsService"));
var _UpdateTimeIntervalService = _interopRequireDefault(require("../../../services/UpdateTimeIntervalService"));
var _ShowTimeIntervalService = _interopRequireDefault(require("../../../services/ShowTimeIntervalService"));
var _DeleteTimeIntervalsService = _interopRequireDefault(require("../../../services/DeleteTimeIntervalsService"));
var _classTransformer = require("class-transformer");
var _ShowBlockedDatesService = _interopRequireDefault(require("../../../services/ShowBlockedDatesService"));
var _ShowAvailableTimeProfessionalsService = _interopRequireDefault(require("../../../services/ShowAvailableTimeProfessionalsService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TimeIntervalsController {
  async create(req, res) {
    const createService = _tsyringe.container.resolve(_CreateTimeIntervalsService.default);
    const timeIntervals = await createService.execute(req.body);
    return res.json((0, _classTransformer.classToClass)(timeIntervals));
  }
  async show(req, res) {
    const {
      timeIntervalId
    } = req.params;
    const showService = _tsyringe.container.resolve(_ShowTimeIntervalService.default);
    const timeInterval = await showService.execute(timeIntervalId);
    return res.json((0, _classTransformer.classToClass)(timeInterval));
  }
  async showBlockedDates(req, res) {
    const {
      professionalId
    } = req.params;
    const {
      year,
      month
    } = req.query;
    const showService = _tsyringe.container.resolve(_ShowBlockedDatesService.default);
    const timeInterval = await showService.execute(professionalId, String(year), String(month));
    return res.json((0, _classTransformer.classToClass)(timeInterval));
  }
  async showAvailablesProfessionalsDates(req, res) {
    const {
      professionalId
    } = req.params;
    const {
      date
    } = req.query;
    const showService = _tsyringe.container.resolve(_ShowAvailableTimeProfessionalsService.default);
    const timeInterval = await showService.execute(professionalId, String(date));
    return res.json((0, _classTransformer.classToClass)(timeInterval));
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const indexService = _tsyringe.container.resolve(_IndexTimeIntervalsService.default);
    const timeIntervals = await indexService.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(timeIntervals));
  }
  async update(req, res) {
    const {
      professionalId
    } = req.params;
    const data = req.body;
    const updateService = _tsyringe.container.resolve(_UpdateTimeIntervalService.default);
    const update = await updateService.execute(data, professionalId);
    return res.json((0, _classTransformer.classToClass)(update));
  }
  async delete(request, response) {
    const {
      timeIntervalId
    } = request.params;
    const deleteService = _tsyringe.container.resolve(_DeleteTimeIntervalsService.default);
    await deleteService.execute(timeIntervalId);
    return response.status(204).send();
  }
}
exports.default = TimeIntervalsController;