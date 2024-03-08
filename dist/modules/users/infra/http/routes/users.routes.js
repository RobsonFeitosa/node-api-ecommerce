"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _multer = _interopRequireDefault(require("multer"));
var _upload = _interopRequireDefault(require("../../../../../config/upload"));
var _UsersController = _interopRequireDefault(require("../controllers/UsersController"));
var _UserAvatarController = _interopRequireDefault(require("../controllers/UserAvatarController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const usersRouter = (0, _express.Router)();
const usersController = new _UsersController.default();
const userAvatarController = new _UserAvatarController.default();
const upload = (0, _multer.default)(_upload.default.multer);
usersRouter.post('/', usersController.create);
usersRouter.get('/teste', usersController.teste);
usersRouter.post('/migrate', usersController.createMigration);
usersRouter.use(_ensureAuthenticated.default);
usersRouter.put('/:user_id', usersController.update);
usersRouter.get('/count', usersController.indexCount);
usersRouter.get('/', usersController.index);
usersRouter.get('/:user_id', usersController.show);
usersRouter.delete('/:user_id', usersController.delete);
usersRouter.patch('/avatar/:user_id', upload.single('avatar'), usersController.updateAvatar);
usersRouter.patch('/avatar', upload.single('avatar'), userAvatarController.update);
var _default = exports.default = usersRouter;