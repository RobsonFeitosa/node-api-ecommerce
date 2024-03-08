"use strict";

var _tsyringe = require("tsyringe");
var _BCryptHashProvider = _interopRequireDefault(require("./HashProvider/implementations/BCryptHashProvider"));
var _GoogleProvider = _interopRequireDefault(require("./AuthProvider/implementations/GoogleProvider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_tsyringe.container.registerSingleton('HashProvider', _BCryptHashProvider.default);
_tsyringe.container.registerSingleton('GoogleProvider', _GoogleProvider.default);