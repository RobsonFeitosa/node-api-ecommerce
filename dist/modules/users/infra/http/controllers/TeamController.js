"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateTeamService = _interopRequireDefault(require("../../../services/CreateTeamService"));
var _ShowTeamService = _interopRequireDefault(require("../../../services/ShowTeamService"));
var _IndexTeamService = _interopRequireDefault(require("../../../services/IndexTeamService"));
var _DeleteTeamService = _interopRequireDefault(require("../../../services/DeleteTeamService"));
var _IndexUsersTeamsAvailableService = _interopRequireDefault(require("../../../services/IndexUsersTeamsAvailableService"));
var _UpdateTeamService = _interopRequireDefault(require("../../../services/UpdateTeamService"));
var _IndexTeamsAvailableService = _interopRequireDefault(require("../../../../schedule/services/IndexTeamsAvailableService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TeamController {
  async create(req, res) {
    const user_id = req.user.id;
    const createService = _tsyringe.container.resolve(_CreateTeamService.default);
    const team = await createService.execute({
      ...req.body,
      user_id
    });
    return res.json(team);
  }
  async show(req, res) {
    const {
      teamId
    } = req.params;
    const showService = _tsyringe.container.resolve(_ShowTeamService.default);
    const team = await showService.execute(teamId);
    return res.json(team);
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const indexService = _tsyringe.container.resolve(_IndexTeamService.default);
    const teams = await indexService.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json(teams);
  }
  async indexTeamsAvailable(request, response) {
    const indexService = _tsyringe.container.resolve(_IndexTeamsAvailableService.default);
    const teams = await indexService.execute();
    return response.json(teams);
  }
  async update(req, res) {
    const {
      teamId
    } = req.params;
    const data = req.body;
    const updateService = _tsyringe.container.resolve(_UpdateTeamService.default);
    const update = await updateService.execute(data, teamId);
    return res.json(update);
  }
  async indexUsersAvailable(request, response) {
    const indexService = _tsyringe.container.resolve(_IndexUsersTeamsAvailableService.default);
    const users = await indexService.execute();
    return response.json(users);
  }
  async delete(request, response) {
    const {
      teamId
    } = request.params;
    const deleteService = _tsyringe.container.resolve(_DeleteTeamService.default);
    await deleteService.execute(teamId);
    return response.status(204).send();
  }
}
exports.default = TeamController;