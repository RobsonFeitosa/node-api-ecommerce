"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsonwebtoken = require("jsonwebtoken");
var _auth = _interopRequireDefault(require("../../../config/auth"));
var _AppError = _interopRequireDefault(require("../../errors/AppError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Authentication error: Token missing'));
  }
  try {
    const decoded = (0, _jsonwebtoken.verify)(String(token), _auth.default.jwt.secret);
    const {
      sub
    } = decoded;

    // socket.user = {
    //   id: sub,
    // }

    return next();
  } catch (err) {
    throw new _AppError.default('Invalid JWT token', 401);
  }
};
exports.default = _default;