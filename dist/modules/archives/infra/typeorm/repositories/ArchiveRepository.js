"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Archive = _interopRequireDefault(require("../entities/Archive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ArchiveRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_Archive.default);
  }
  async create(data) {
    const archive = this.ormRepository.create(data);
    await this.ormRepository.save(archive);
    return archive;
  }
  async findById(id) {
    const archive = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return archive;
  }
  async findByName(name) {
    const archive = await this.ormRepository.findOne({
      where: {
        name
      }
    });
    return archive;
  }
  async findAllByReferenceId(id) {
    const archives = await this.ormRepository.find({
      where: {
        reference_id: id
      }
    });
    return archives;
  }
  async findAndCount(options, originName, referenceId) {
    const archive = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      where: [{
        reference_id: referenceId
      }, {
        origin_target: originName
      }]
    });
    return archive;
  }
  async delete(id) {
    const archive = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (archive) {
      this.ormRepository.remove(archive);
    }
  }
  async save(archive) {
    return this.ormRepository.save(archive);
  }
}
var _default = exports.default = ArchiveRepository;