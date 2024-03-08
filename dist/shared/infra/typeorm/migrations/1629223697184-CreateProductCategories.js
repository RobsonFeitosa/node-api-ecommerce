"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateProductCategories1629223697184 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'pd101_product_categories',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'parent_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'name',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'type',
        type: 'varchar'
      }, {
        name: 'level',
        type: 'int',
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
    await queryRunner.dropTable('pd101_product_categories');
  }
}
exports.default = CreateProductCategories1629223697184;