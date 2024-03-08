"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IArchiveRepository = _interopRequireDefault(require("../repositories/IArchiveRepository"));
var _IStorageProvider = _interopRequireDefault(require("../../../shared/container/providers/StorageProvider/models/IStorageProvider"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateArchiveService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ArchiveRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('StorageProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IArchiveRepository.default === "undefined" ? Object : _IArchiveRepository.default, typeof _IStorageProvider.default === "undefined" ? Object : _IStorageProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class UpdateArchiveService {
  constructor(archiveRepository, storageProvider) {
    this.archiveRepository = archiveRepository;
    this.storageProvider = storageProvider;
  }
  async execute(data) {
    const {
      archiveId,
      file,
      payload
    } = data;
    const archive = await this.archiveRepository.findById(archiveId);
    if (!archive) {
      throw new _AppError.default('Archive not found');
    }
    await this.storageProvider.deleteFile(archive.name);
    const filename = file.filename;
    const createFile = await this.storageProvider.saveFile(filename);
    archive.name = createFile;
    archive.size = String(file.size);
    if (payload?.referenceId) {
      archive.reference_id = payload.referenceId;
    }
    archive.type = file.type;
    if (payload?.originName) {
      archive.origin_target = payload.originName;
    }
    if (payload?.isPrimary) {
      archive.is_primary = payload.isPrimary;
    }
    await this.archiveRepository.save(archive);
    return archive;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateArchiveService;