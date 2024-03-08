"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProductVariations1698902462288 = void 0;
var _typeorm = require("typeorm");
class CreateProductVariations1698902462288 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'pd106_products_variations',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'product_attr_id',
        type: 'uuid'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'price',
        type: 'int'
      }, {
        name: 'quantity',
        type: 'int',
        isNullable: true
      }, {
        name: 'time',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'actived',
        type: 'boolean'
      }, {
        name: 'weight',
        type: 'int',
        isNullable: true
      }, {
        name: 'dimensions',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'sku',
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
      }],
      foreignKeys: [{
        name: 'ProductVariationsAttrId',
        columnNames: ['product_attr_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pd105_products_attributes',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('pd106_products_variations');
  }
}
exports.CreateProductVariations1698902462288 = CreateProductVariations1698902462288;