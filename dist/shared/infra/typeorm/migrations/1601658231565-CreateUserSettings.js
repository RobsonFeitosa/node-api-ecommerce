"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateUserSettings1601658231565 {
  async up(queryRunner) {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(new _typeorm.Table({
      name: 'users_settings',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'avatar',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'level',
        type: 'int',
        default: 2
      }, {
        name: 'cpf',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'phone_number',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'actived',
        type: 'boolean',
        default: false
      }, {
        name: 'deleted_at',
        type: 'timestamp with time zone',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'timestamp with time zone',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp with time zone',
        default: 'now()'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('users_settings');
  }
}
exports.default = CreateUserSettings1601658231565;