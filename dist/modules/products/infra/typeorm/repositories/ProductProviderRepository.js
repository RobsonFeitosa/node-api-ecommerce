"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductProvider = _interopRequireDefault(require("../entities/ProductProvider"));
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductProviderRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_ProductProvider.default);
  }
  async create(data) {
    const created = this.ormRepository.create(data);
    const provider = await this.ormRepository.save(created);
    return provider;
  }
  async findAndCount(options) {
    const providers = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      order: {
        created_at: 'DESC'
      }
    });
    return providers;
  }
  async findById(id) {
    const provider = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return provider;
  }
  async delete(id) {
    const provider = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (provider) {
      this.ormRepository.remove(provider);
    }
  }
  async All() {
    const provider = await this.ormRepository.find();
    return provider;
  }
  async save(data) {
    return this.ormRepository.save(data);
  }
}
var _default = exports.default = ProductProviderRepository;