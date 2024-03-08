"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _classTransformer = require("class-transformer");
var _AuthenticateUserService = _interopRequireDefault(require("../../../services/AuthenticateUserService"));
var _AuthenticateGoogleService = _interopRequireDefault(require("../../../services/AuthenticateGoogleService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SessionsControler {
  async create(req, res) {
    const {
      email,
      password
    } = req.body;
    const authenticateUser = _tsyringe.container.resolve(_AuthenticateUserService.default);
    const {
      user,
      token
    } = await authenticateUser.execute({
      email,
      password
    });
    return res.json({
      user: (0, _classTransformer.classToClass)(user),
      token
    });
  }
  async createGoogle(req, res) {
    const {
      credential,
      clientId
    } = req.body;
    const authenticateUser = _tsyringe.container.resolve(_AuthenticateGoogleService.default);
    const {
      user,
      token
    } = await authenticateUser.execute({
      credential,
      clientId
    });
    return res.json({
      user: (0, _classTransformer.classToClass)(user),
      token
    });
  }
}
exports.default = SessionsControler;