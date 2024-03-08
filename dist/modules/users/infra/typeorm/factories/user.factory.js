"use strict";

var _typeormSeeding = require("typeorm-seeding");
var _User = _interopRequireDefault(require("../entities/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _typeormSeeding.define)(_User.default, () => {
  const user = new _User.default();
  const firstName = 'jonh';
  const lastName = 'doe';
  user.name = `${firstName} ${lastName}`;
  user.email = 'jonh@email.com';
  user.password = '123123';
  return user;
});