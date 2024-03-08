"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _UserComments = _interopRequireDefault(require("../entities/UserComments"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CommentRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_UserComments.default);
  }
  async findById(id) {
    const result = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return result;
  }
  async findByIdUser(id) {
    const result = await this.ormRepository.findOne({
      where: {
        user_id: id
      }
    });
    return result;
  }
  async findAll(options, userId) {
    const builder = this.ormRepository.createQueryBuilder('comments');
    const total = await builder.getCount();
    const page = options.page || 1;
    const limit = options.limit || 1000;
    const data = builder.skip((page - 1) * limit).addOrderBy('comments.created_at', 'DESC').take(options.limit);
    if (userId) {
      data.where('comments.user_id = :userId', {
        userId
      });
    }
    return {
      total,
      data: await data.getMany()
    };
  }
  async create(data) {
    const result = this.ormRepository.create({
      ...data,
      is_public: data.isPublic,
      user_id: data.userId
    });
    await this.ormRepository.save(result);
    return result;
  }
  async save(address) {
    return this.ormRepository.save(address);
  }
  async delete(id) {
    const result = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (result) {
      this.ormRepository.remove(result);
    }
  }
}
var _default = exports.default = CommentRepository;