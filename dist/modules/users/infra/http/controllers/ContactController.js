"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _SendContactEmailService = _interopRequireDefault(require("../../../services/SendContactEmailService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ContactController {
  async create(req, res) {
    const {
      name,
      email,
      assunto,
      message
    } = req.body;
    const cendContactEmail = _tsyringe.container.resolve(_SendContactEmailService.default);
    await cendContactEmail.execute({
      name,
      email,
      assunto,
      message
    });
    return res.status(204).json();
  }
}
exports.default = ContactController;