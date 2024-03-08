"use strict";

var _typeormSeeding = require("typeorm-seeding");
var _UserSettings = _interopRequireDefault(require("../entities/UserSettings"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _typeormSeeding.define)(_UserSettings.default, () => {
  const setting = new _UserSettings.default();
  setting.level = 1;
  setting.actived = true;
  return setting;
});