"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _typeorm2 = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _User = _interopRequireDefault(require("../entities/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm2.default.getRepository(_User.default);
  }
  async create(userData) {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);
    return user;
  }
  async findById(id) {
    const builder = this.ormRepository.createQueryBuilder('users');
    const data = await builder.leftJoinAndSelect('users.settings', 'users_settings').where('users.id = :id', {
      id
    }).getOne();
    return data;
  }
  async findByIds(ids) {
    const isFulled = ids.length !== 0 || null;
    const users = this.ormRepository.find({
      where: {
        id: (0, _typeorm.In)(ids)
      }
    });
    return users;
  }
  async findAndCount(options) {
    const users = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      relations: ['settings']
    });
    return users;
  }
  async findByEmail(email) {
    const user = await this.ormRepository.findOne({
      where: {
        email
      },
      relations: ['settings']
    });
    return user;
  }
  async findInNotUsersIds(usersIds) {
    if (usersIds.length === 0) {
      const users = await this.ormRepository.find();
      return users;
    }
    const users = await this.ormRepository.createQueryBuilder('pr100_professional').where('pr100_professional.id NOT IN (:...usersIds)', {
      usersIds
    }).getMany();
    return users;
  }
  async findUserForName(name) {
    const result = await this.ormRepository.findOne({
      where: {
        name
      }
    });
    return result;
  }
  async delete(id) {
    const user = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (user) {
      this.ormRepository.remove(user);
    }
  }
  async save(user) {
    return this.ormRepository.save(user);
  }
}
var _default = exports.default = UsersRepository;