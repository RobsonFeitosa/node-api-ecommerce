"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _classTransformer = require("class-transformer");
var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));
var _CreateMigrateUserService = _interopRequireDefault(require("../../../services/CreateMigrateUserService"));
var _ShowUserService = _interopRequireDefault(require("../../../services/ShowUserService"));
var _IndexUsersService = _interopRequireDefault(require("../../../services/IndexUsersService"));
var _UpdateUserService = _interopRequireDefault(require("../../../services/UpdateUserService"));
var _UpdateUserAvatarService = _interopRequireDefault(require("../../../services/UpdateUserAvatarService"));
var _DeleteUserService = _interopRequireDefault(require("../../../services/DeleteUserService"));
var _IndexCountUserService = _interopRequireDefault(require("../../../services/IndexCountUserService"));
var _TesteService = _interopRequireDefault(require("../../../services/TesteService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UsersController {
  async teste(req, res) {
    const createUser = _tsyringe.container.resolve(_TesteService.default);
    const user = await createUser.execute({
      transactionId: '5b13dba1-1b2f-4ce1-9310-1bd17df65766'
    });
    return res.json((0, _classTransformer.classToClass)(user));
  }
  async create(req, res) {
    const createUser = _tsyringe.container.resolve(_CreateUserService.default);
    const user = await createUser.execute(req.body);
    return res.json((0, _classTransformer.classToClass)(user));
  }
  async createMigration(req, res) {
    const createUser = _tsyringe.container.resolve(_CreateMigrateUserService.default);
    await createUser.execute(req.body);
    return res.json({
      migrate: 'done'
    });
  }
  async update(request, response) {
    const {
      user_id
    } = request.params;
    const updateUser = _tsyringe.container.resolve(_UpdateUserService.default);
    const user = await updateUser.execute({
      user_id,
      userData: request.body
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }
  async updateAvatar(request, response) {
    const {
      user_id
    } = request.params;
    const updateUserAvatar = _tsyringe.container.resolve(_UpdateUserAvatarService.default);
    const user = await updateUserAvatar.execute({
      user_id,
      avatarFilename: request.file.filename
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }
  async indexCount(request, response) {
    const count = _tsyringe.container.resolve(_IndexCountUserService.default);
    const findCountUser = await count.execute();
    return response.json(findCountUser);
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const indexUser = _tsyringe.container.resolve(_IndexUsersService.default);
    const users = await indexUser.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(users));
  }
  async show(request, response) {
    const {
      user_id
    } = request.params;
    const showUser = _tsyringe.container.resolve(_ShowUserService.default);
    const user = await showUser.execute(user_id);
    return response.json((0, _classTransformer.classToClass)(user));
  }
  async delete(request, response) {
    const {
      user_id
    } = request.params;
    const deleteUser = _tsyringe.container.resolve(_DeleteUserService.default);
    await deleteUser.execute(user_id);
    return response.status(204).send();
  }
}
exports.default = UsersController;