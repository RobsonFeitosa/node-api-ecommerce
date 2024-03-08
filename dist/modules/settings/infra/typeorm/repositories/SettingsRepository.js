"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Settings = _interopRequireDefault(require("../entities/Settings"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SettingsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_Settings.default);
  }
  async create(settingsData) {
    const setting = this.ormRepository.create(settingsData);
    await this.ormRepository.save(setting);
    return setting;
  }
  async findById(id) {
    const setting = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return setting;
  }
  async findByLocation(location) {
    const setting = await this.ormRepository.findOne({
      where: {
        location
      }
    });
    return setting;
  }
  async save(settingsData) {
    return this.ormRepository.save(settingsData);
  }
}
var _default = exports.default = SettingsRepository;