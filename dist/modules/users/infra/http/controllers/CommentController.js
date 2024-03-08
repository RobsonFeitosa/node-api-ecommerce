"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateCommentService = _interopRequireDefault(require("../../../services/CreateCommentService"));
var _IndexCommentService = _interopRequireDefault(require("../../../services/IndexCommentService"));
var _classTransformer = require("class-transformer");
var _ShowCommentService = _interopRequireDefault(require("../../../services/ShowCommentService"));
var _DeleteCommentService = _interopRequireDefault(require("../../../services/DeleteCommentService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CommentController {
  async create(req, res) {
    const create = _tsyringe.container.resolve(_CreateCommentService.default);
    const response = await create.execute(req.body, req.user.id);
    return res.json(response);
  }
  async show(req, res) {
    const {
      commentId
    } = req.params;
    const show = _tsyringe.container.resolve(_ShowCommentService.default);
    const result = await show.execute(commentId);
    return res.json(result);
  }
  async delete(req, res) {
    const {
      commentId
    } = req.params;
    const deleted = _tsyringe.container.resolve(_DeleteCommentService.default);
    await deleted.execute(commentId);
    return res.status(204).send();
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999,
      userId = ''
    } = request.query;
    const index = _tsyringe.container.resolve(_IndexCommentService.default);
    const result = await index.execute({
      page: Number(page),
      limit: Number(limit)
    }, String(userId));
    return response.json((0, _classTransformer.classToClass)(result));
  }
}
exports.default = CommentController;