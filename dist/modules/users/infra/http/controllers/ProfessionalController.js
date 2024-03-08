"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _classTransformer = require("class-transformer");
var _CreateProfessionalService = _interopRequireDefault(require("../../../services/CreateProfessionalService"));
var _ShowProfessionalService = _interopRequireDefault(require("../../../services/ShowProfessionalService"));
var _UpdateProfessionalService = _interopRequireDefault(require("../../../services/UpdateProfessionalService"));
var _SendEmailProfessionalService = _interopRequireDefault(require("../../../services/SendEmailProfessionalService"));
var _IndexProfessionalService = _interopRequireDefault(require("../../../services/IndexProfessionalService"));
var _IndexUsersProfessionalAvailableService = _interopRequireDefault(require("../../../services/IndexUsersProfessionalAvailableService"));
var _DeleteProfessionalService = _interopRequireDefault(require("../../../services/DeleteProfessionalService"));
var _indexProfessionalAvailableService = _interopRequireDefault(require("../../../services/indexProfessionalAvailableService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProfessionalController {
  async create(req, res) {
    const createService = _tsyringe.container.resolve(_CreateProfessionalService.default);
    const professional = await createService.execute(req.body);
    return res.json(professional);
  }
  async show(req, res) {
    const {
      professionalId
    } = req.params;
    const showService = _tsyringe.container.resolve(_ShowProfessionalService.default);
    const professional = await showService.execute(professionalId);
    return res.json(professional);
  }
  async update(req, res) {
    const {
      professionalId
    } = req.params;
    const data = req.body;
    const updateService = _tsyringe.container.resolve(_UpdateProfessionalService.default);
    const update = await updateService.execute(data, professionalId);
    return res.json(update);
  }
  async sendActive(req, res) {
    const {
      email
    } = req.body;
    const showService = _tsyringe.container.resolve(_SendEmailProfessionalService.default);
    const professional = await showService.execute(email);
    return res.json(professional);
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const indexService = _tsyringe.container.resolve(_IndexProfessionalService.default);
    const professionals = await indexService.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(professionals));
  }
  async indexAllAvailable(request, response) {
    const indexService = _tsyringe.container.resolve(_indexProfessionalAvailableService.default);
    const professionals = await indexService.execute();
    return response.json((0, _classTransformer.classToClass)(professionals));
  }
  async indexUsersAvailable(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const indexService = _tsyringe.container.resolve(_IndexUsersProfessionalAvailableService.default);
    const users = await indexService.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json(users);
  }
  async delete(request, response) {
    const {
      professionalId
    } = request.params;
    const deleteService = _tsyringe.container.resolve(_DeleteProfessionalService.default);
    await deleteService.execute(professionalId);
    return response.status(204).send();
  }
}
exports.default = ProfessionalController;