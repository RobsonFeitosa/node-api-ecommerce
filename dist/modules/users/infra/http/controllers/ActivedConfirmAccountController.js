"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ActivedConfirmAccountService = _interopRequireDefault(require("../../../services/ActivedConfirmAccountService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ForgotPasswordController {
  async create(req, res) {
    const {
      token
    } = req.body;
    const activedConfirm = _tsyringe.container.resolve(_ActivedConfirmAccountService.default);
    await activedConfirm.execute({
      token,
      actived: true
    });
    return res.status(204).json();
  }
}
exports.default = ForgotPasswordController;