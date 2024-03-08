"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProductData1698892691523 = void 0;
var _typeorm = require("typeorm");
class CreateProductData1698892691523 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'pd104_products_data',
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
        name: 'quantity',
        type: 'int',
        isNullable: true
      }, {
        name: 'sku',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'weight',
        type: 'int',
        isNullable: true
      }, {
        name: 'dimensions',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'code_bar',
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
        name: 'ProductIdData',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pd100_products',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('pd104_products_data');
  }
}
exports.CreateProductData1698892691523 = CreateProductData1698892691523;