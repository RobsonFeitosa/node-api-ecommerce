"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _TeamController = _interopRequireDefault(require("../controllers/TeamController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const teamRouter = (0, _express.Router)();
const teamController = new _TeamController.default();
teamRouter.use(_ensureAuthenticated.default);
teamRouter.post('/', teamController.create);
teamRouter.put('/:teamId', teamController.update);
teamRouter.get('/users-availables', teamController.indexUsersAvailable);
teamRouter.get('/:teamId', teamController.show);
teamRouter.get('/', teamController.index);
teamRouter.get('/available', teamController.indexTeamsAvailable);
teamRouter.delete('/:teamId', teamController.delete);
var _default = exports.default = teamRouter;