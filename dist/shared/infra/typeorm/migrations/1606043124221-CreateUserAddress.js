"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateUserAddress1606043124221 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'address',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'user_id',
        type: 'uuid'
      }, {
        name: 'zipcode',
        type: 'varchar'
      }, {
        name: 'city',
        type: 'varchar'
      }, {
        name: 'primary',
        type: 'boolean',
        default: false
      }, {
        name: 'title',
        type: 'varchar'
      }, {
        name: 'state',
        type: 'varchar'
      }, {
        name: 'country',
        type: 'varchar'
      }, {
        name: 'neighborhood',
        type: 'varchar'
      }, {
        name: 'street',
        type: 'varchar'
      }, {
        name: 'street_number',
        type: 'varchar'
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
    await queryRunner.dropTable('address');
  }
}
exports.default = CreateUserAddress1606043124221;