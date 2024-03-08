"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userConnection = void 0;
var _userHandler = _interopRequireDefault(require("./userHandler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userConnection = (io, socket) => {
  new _userHandler.default(io, socket).userCreatePixHandle();
};
exports.userConnection = userConnection;