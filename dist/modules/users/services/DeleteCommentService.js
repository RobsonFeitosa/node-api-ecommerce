"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ICommentRepository = _interopRequireDefault(require("../repositories/ICommentRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let DeleteCommentService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CommentRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICommentRepository.default === "undefined" ? Object : _ICommentRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteCommentService {
  constructor(commentRepository) {
    this.commentRepository = commentRepository;
  }
  async execute(commentId) {
    const result = await this.commentRepository.findById(commentId);
    if (!result) throw new _AppError.default('Comment not found', 404);
    await this.commentRepository.delete(result.id);
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = DeleteCommentService;