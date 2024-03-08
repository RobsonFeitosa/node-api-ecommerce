"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _CommentController = _interopRequireDefault(require("../controllers/CommentController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const commentsRouter = (0, _express.Router)();
const commentController = new _CommentController.default();
commentsRouter.use(_ensureAuthenticated.default);
commentsRouter.post('/', commentController.create);
commentsRouter.get('/:commentId', commentController.show);
commentsRouter.delete('/:commentId', commentController.delete);
commentsRouter.get('/', commentController.index);
var _default = exports.default = commentsRouter;