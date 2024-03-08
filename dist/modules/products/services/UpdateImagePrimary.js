"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IArchiveRepository = _interopRequireDefault(require("../../archives/repositories/IArchiveRepository"));
var _IStorageProvider = _interopRequireDefault(require("../../../shared/container/providers/StorageProvider/models/IStorageProvider"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateImagePrimary = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ArchiveRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('StorageProvider')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default, typeof _IArchiveRepository.default === "undefined" ? Object : _IArchiveRepository.default, typeof _IStorageProvider.default === "undefined" ? Object : _IStorageProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class UpdateImagePrimary {
  constructor(productsRepository, archiveRepository, storageProvider) {
    this.productsRepository = productsRepository;
    this.archiveRepository = archiveRepository;
    this.storageProvider = storageProvider;
  }
  async execute(productId, file) {
    const product = await this.productsRepository.findById(productId);
    if (!product) {
      throw new _AppError.default('Product not found');
    }
    const archives = await this.archiveRepository.findAllByReferenceId(product.id);
    for (const archive of archives) {
      archive.is_primary = false;
      await this.archiveRepository.save(archive);
    }
    const filename = file.filename;
    const createFile = await this.storageProvider.saveFile(filename);
    const archive = await this.archiveRepository.create({
      name: createFile,
      reference_id: product.id,
      origin_target: 'product',
      size: String(file.size),
      type: file.mimetype,
      is_primary: true
    });
    return archive;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateImagePrimary;