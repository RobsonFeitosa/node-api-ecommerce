"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CreateArchiveService = _interopRequireDefault(require("../../../services/CreateArchiveService"));
var _DeleteArchiveService = _interopRequireDefault(require("../../../services/DeleteArchiveService"));
var _IndexArchiveService = _interopRequireDefault(require("../../../services/IndexArchiveService"));
var _UpdateArchiveService = _interopRequireDefault(require("../../../services/UpdateArchiveService"));
var _UpdatePrimaryArchiveService = _interopRequireDefault(require("../../../services/UpdatePrimaryArchiveService"));
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ArchiveController {
  async create(req, res) {
    const {
      originName,
      referenceId
    } = req.params;
    const createArchive = _tsyringe.container.resolve(_CreateArchiveService.default);
    const files = req.files;
    const archives = await createArchive.execute({
      files,
      originName,
      referenceId
    });
    return res.json((0, _classTransformer.classToClass)(archives));
  }
  async index(request, response) {
    const {
      page = 1,
      limit,
      originName,
      referenceId
    } = request.query;
    const index = _tsyringe.container.resolve(_IndexArchiveService.default);
    const archives = await index.execute({
      page: Number(page),
      limit: Number(limit)
    }, originName ? String(originName) : undefined, referenceId ? String(referenceId) : undefined);
    return response.json((0, _classTransformer.classToClass)(archives));
  }
  async updateByReference(request, response) {
    const {
      referenceId,
      archiveId
    } = request.params;
    const updateArchivePrimary = _tsyringe.container.resolve(_UpdatePrimaryArchiveService.default);
    const product = await updateArchivePrimary.execute({
      referenceId,
      archiveId
    });
    return response.json((0, _classTransformer.classToClass)(product));
  }
  async update(request, response) {
    const {
      archiveId
    } = request.params;
    const {
      data
    } = request.body;
    const updateArchivePrimary = _tsyringe.container.resolve(_UpdateArchiveService.default);
    const file = request.file;
    const product = await updateArchivePrimary.execute({
      file,
      archiveId,
      payload: data && JSON.parse(data)
    });
    return response.json((0, _classTransformer.classToClass)(product));
  }
  async delete(request, response) {
    const {
      archiveId
    } = request.params;
    const archiveDelete = _tsyringe.container.resolve(_DeleteArchiveService.default);
    await archiveDelete.execute({
      archiveId
    });
    return response.status(204).send();
  }
}
exports.default = ArchiveController;