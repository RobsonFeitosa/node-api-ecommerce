"use strict";

require("reflect-metadata");
require("dotenv/config");
var _app = _interopRequireDefault(require("./app"));
var _typeorm = _interopRequireDefault(require("../typeorm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_typeorm.default.initialize().then(() => {
  _app.default.listen(3333, () => {
    console.log('Server started on port 3333!');
  });
}).finally(() => {
  console.log(`Swagger: ${process.env.APP_API_URL || ''}/api-docs`);
});