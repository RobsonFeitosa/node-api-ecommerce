"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
var _IndexProvidersService = _interopRequireDefault(require("../../../services/IndexProvidersService"));
var _ShowProviderService = _interopRequireDefault(require("../../../services/ShowProviderService"));
var _DeleteProviderService = _interopRequireDefault(require("../../../services/DeleteProviderService"));
var _CreateProvidersService = _interopRequireDefault(require("../../../services/CreateProvidersService"));
var _UpdateProviderService = _interopRequireDefault(require("../../../services/UpdateProviderService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProvidersController {
  async create(request, response) {
    const data = request.body;
    const createProductProviders = _tsyringe.container.resolve(_CreateProvidersService.default);
    const provider = await createProductProviders.execute(data);
    return response.json((0, _classTransformer.classToClass)(provider));
  }
  async update(request, response) {
    const data = request.body;
    const {
      providerId
    } = request.params;
    const updateProvider = _tsyringe.container.resolve(_UpdateProviderService.default);
    const product = await updateProvider.execute(data, providerId);
    return response.json((0, _classTransformer.classToClass)(product));
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const index = _tsyringe.container.resolve(_IndexProvidersService.default);
    const providers = await index.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(providers));
  }
  async show(request, response) {
    const {
      providerId
    } = request.params;
    const show = _tsyringe.container.resolve(_ShowProviderService.default);
    const provider = await show.execute(providerId);
    return response.json((0, _classTransformer.classToClass)(provider));
  }
  async delete(request, response) {
    const {
      providerId
    } = request.params;
    const deleteProvider = _tsyringe.container.resolve(_DeleteProviderService.default);
    await deleteProvider.execute(providerId);
    return response.status(204).send();
  }
}
exports.default = ProvidersController;