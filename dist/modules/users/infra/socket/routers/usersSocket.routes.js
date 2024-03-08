"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _jsonwebtoken = require("jsonwebtoken");
var _auth = _interopRequireDefault(require("../../../../../config/auth"));
var _AppError = _interopRequireDefault(require("../../../../../shared/errors/AppError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const authenticateSocket = (socket, next) => {
  const token = socket.handshake.query.token;
  if (!token) {
    return next(new Error('Authentication error: Token missing'));
  }
  try {
    const decoded = (0, _jsonwebtoken.verify)(String(token), _auth.default.jwt.secret);
    const {
      sub
    } = decoded;
    socket.user = {
      id: sub
    };
    return next();
  } catch (err) {
    throw new _AppError.default('Invalid JWT token', 401);
  }
};
var _default = io => {
  const router = (0, _express.Router)();

  // Handle Socket.IO connections
  io.on('connection', socket => {
    console.log('User connected:', socket);
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket);
    });
  });

  // Routes for testing authentication
  router.get('/public', (req, res) => {
    res.send('Public route');
  });
  router.get('/private', authenticateSocket, (req, res) => {
    res.send(`Private route for ${req.user.id}`);
  });
  return router;
};
exports.default = _default;