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
let CreateArchiveService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ArchiveRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('StorageProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IArchiveRepository.default === "undefined" ? Object : _IArchiveRepository.default, typeof _IStorageProvider.default === "undefined" ? Object : _IStorageProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateArchiveService {
  constructor(archiveRepository, storageProvider) {
    this.archiveRepository = archiveRepository;
    this.storageProvider = storageProvider;
  }
  async execute(data) {
    const {
      originName,
      referenceId
    } = data;
    const {
      files
    } = data;
    if (files.length >= 8) {
      throw new _AppError.default('exceeded the maximum number allowed, 8 files ');
    }
    const archivesReference = await this.archiveRepository.findAllByReferenceId(referenceId);
    for (const archive of archivesReference) {
      archive.is_primary = false;
      await this.archiveRepository.save(archive);
    }
    const archives = [];
    for (const file of files) {
      const filename = file.filename;
      const createFile = await this.storageProvider.saveFile(filename);
      const archive = await this.archiveRepository.create({
        name: createFile,
        reference_id: referenceId,
        origin_target: originName,
        size: String(file.size),
        type: file.mimetype,
        is_primary: false
      });
      archives.push(archive);
    }
    return archives;
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateArchiveService;