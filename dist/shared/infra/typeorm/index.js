"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _datasource = _interopRequireDefault(require("../../../config/datasource"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const dataSource = new _typeorm.DataSource({
  type: 'postgres',
  host: process.env.DB_HOST_PG,
  username: process.env.DB_USERNAME_PG,
  port: Number(process.env.DB_PORT_PG),
  password: process.env.DB_PASSWORD_PG,
  database: process.env.DB_DATABASE_PG,
  logging: false,
  synchronize: false,
  entities: [`./${process.env.NODE_ENV === 'local' ? 'src' : 'dist'}/modules/**/infra/typeorm/entities/*`],
  migrations: [`./${process.env.NODE_ENV === 'local' ? 'src' : 'dist'}/shared/**/infra/typeorm/migrations/*`],
  extra: {
    ssl: false
  },
  dropSchema: _datasource.default.options.dropSchema
});
var _default = exports.default = dataSource;