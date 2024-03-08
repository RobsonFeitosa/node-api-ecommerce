"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class UserHandler {
  constructor(io, socket) {
    this.io = void 0;
    this.socket = void 0;
    this.io = io;
    this.socket = socket;
  }
  userCreatePixHandle() {
    console.log({
      userId: this.socket.user.id
    });
    const createPixOrder = data => {
      console.log('A user connected');
      console.log('Received message:', data);
      this.io.emit('user:create-pix-order', {
        data,
        other: 22
      });
    };
    this.socket.on('user:create-pix-order', createPixOrder);
  }
}
exports.default = UserHandler;