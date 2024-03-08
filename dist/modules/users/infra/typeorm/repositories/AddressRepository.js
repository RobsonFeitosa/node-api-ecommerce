"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Address = _interopRequireDefault(require("../entities/Address"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AddressRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_Address.default);
  }
  async create(addressData) {
    console.log('entrouuuu', addressData);
    const address = this.ormRepository.create(addressData);
    await this.ormRepository.save(address);
    return address;
  }
  async findAll() {
    const addreses = await this.ormRepository.find();
    return addreses;
  }
  async findById(id) {
    const address = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return address;
  }
  async findByIdUser(userId) {
    const address = await this.ormRepository.findOne({
      where: {
        user_id: userId
      }
    });
    return address;
  }
  async findAndCount(options) {
    const products = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit
    });
    return products;
  }
  async save(address) {
    return this.ormRepository.save(address);
  }
}
var _default = exports.default = AddressRepository;