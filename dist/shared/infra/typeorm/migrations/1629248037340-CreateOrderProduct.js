"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateOrderProduct1629248037340 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'or100_pr100_order_product',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'order_id',
        type: 'uuid'
      }, {
        name: 'product_id',
        type: 'uuid'
      }, {
        name: 'quantity',
        type: 'int'
      }],
      foreignKeys: [{
        name: 'ProductOrderId',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pd100_products',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }, {
        name: 'OrderProductId',
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'or100_orders',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('or100_pr100_order_product');
  }
}
exports.default = CreateOrderProduct1629248037340;