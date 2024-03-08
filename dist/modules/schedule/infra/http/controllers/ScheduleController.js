"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
var _CreateScheduleService = _interopRequireDefault(require("../../../services/CreateScheduleService"));
var _IndexScheduleService = _interopRequireDefault(require("../../../services/IndexScheduleService"));
var _ShowScheduleService = _interopRequireDefault(require("../../../services/ShowScheduleService"));
var _DeleteScheduleService = _interopRequireDefault(require("../../../services/DeleteScheduleService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ScheduleController {
  async create(request, response) {
    const data = request.body;
    const createService = _tsyringe.container.resolve(_CreateScheduleService.default);
    const schedule = await createService.execute(data);
    return response.json((0, _classTransformer.classToClass)(schedule));
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const index = _tsyringe.container.resolve(_IndexScheduleService.default);
    const schedules = await index.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(schedules));
  }
  async show(request, response) {
    const {
      scheduleId
    } = request.params;
    const show = _tsyringe.container.resolve(_ShowScheduleService.default);
    const schedule = await show.execute(scheduleId);
    return response.json((0, _classTransformer.classToClass)(schedule));
  }
  async delete(request, response) {
    const {
      scheduleId
    } = request.params;
    const deleteProvider = _tsyringe.container.resolve(_DeleteScheduleService.default);
    await deleteProvider.execute(scheduleId);
    return response.status(204).send();
  }
}
exports.default = ScheduleController;