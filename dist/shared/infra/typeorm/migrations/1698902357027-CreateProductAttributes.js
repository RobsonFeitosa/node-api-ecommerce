"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProductAttributes1698902357027 = void 0;
var _typeorm = require("typeorm");
class CreateProductAttributes1698902357027 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'pd105_products_attributes',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'product_id',
        type: 'uuid'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'options',
        type: 'varchar'
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
        name: 'ProductIdAttr',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pd100_products',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('pd105_products_attributes');
  }
}
exports.CreateProductAttributes1698902357027 = CreateProductAttributes1698902357027;