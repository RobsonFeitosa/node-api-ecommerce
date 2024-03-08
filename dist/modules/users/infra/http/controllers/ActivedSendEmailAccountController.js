"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _SendActivedUserEmailService = _interopRequireDefault(require("../../../services/SendActivedUserEmailService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ForgotPasswordController {
  async create(req, res) {
    const {
      email
    } = req.body;
    const sendActiveEmail = _tsyringe.container.resolve(_SendActivedUserEmailService.default);
    await sendActiveEmail.execute({
      email
    });
    return res.status(204).json();
  }
}
exports.default = ForgotPasswordController;