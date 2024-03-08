"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _UserSettings = _interopRequireDefault(require("../entities/UserSettings"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserSettingsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_UserSettings.default);
  }
  async create(settingsData) {
    const userSettings = this.ormRepository.create(settingsData);
    await this.ormRepository.save(userSettings);
    return userSettings;
  }
  async findAndCount(options) {
    const builder = this.ormRepository.createQueryBuilder('users_settings');
    const total = await builder.getCount();
    if (options.page && options.limit) {
      const data = await builder.skip((options.page - 1) * options.limit).addOrderBy('users_settings.created_at').leftJoinAndSelect('users_settings.user', 'user').take(options.limit).getMany();
      return {
        total,
        data
      };
    }
    const data = await builder.getMany();
    return {
      total,
      data
    };
  }
  async findById(id) {
    const user = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return user;
  }
  async save(userSettings) {
    return this.ormRepository.save(userSettings);
  }
}
var _default = exports.default = UserSettingsRepository;