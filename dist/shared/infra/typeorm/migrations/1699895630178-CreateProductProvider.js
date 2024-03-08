"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProductProvider1699895630178 = void 0;
var _typeorm = require("typeorm");
class CreateProductProvider1699895630178 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'pd107_products_provider',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'phone1',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'phone2',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'email',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'address',
        type: 'varchar',
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
    await queryRunner.dropTable('pd107_products_provider');
  }
}
exports.CreateProductProvider1699895630178 = CreateProductProvider1699895630178;