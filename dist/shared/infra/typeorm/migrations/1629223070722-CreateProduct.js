"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateProduct1629223070722 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'pd100_products',
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
        name: 'cod_product',
        type: 'varchar'
      }, {
        name: 'type',
        type: 'varchar'
      }, {
        name: 'description',
        type: 'text',
        isNullable: true
      }, {
        name: 'short_description',
        type: 'text',
        isNullable: true
      }, {
        name: 'mode_data',
        type: 'varchar'
      }, {
        name: 'time',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'slug',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'price',
        type: 'int',
        isNullable: true
      }, {
        name: 'old_price',
        type: 'int',
        isNullable: true
      }, {
        name: 'emphasis',
        type: 'boolean',
        default: false,
        isNullable: true
      }, {
        name: 'visibility',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'published',
        type: 'varchar'
      }, {
        name: 'time_discount_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'categories',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'timestamp with time zone',
        default: 'now()'
      }, {
        name: 'deleted_at',
        type: 'timestamp with time zone',
        isNullable: true
      }, {
        name: 'updated_at',
        type: 'timestamp with time zone',
        default: 'now()'
      }],
      foreignKeys: [{
        name: 'TimeDiscountId',
        columnNames: ['time_discount_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'ti100_time_discount'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('pd100_products');
  }
}
exports.default = CreateProduct1629223070722;