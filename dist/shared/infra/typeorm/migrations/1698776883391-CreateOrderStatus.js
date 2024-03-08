"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOrderStatus1698776883391 = void 0;
var _typeorm = require("typeorm");
class CreateOrderStatus1698776883391 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'or102_orders_status',
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
        name: 'order_id',
        type: 'uuid'
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
        name: 'OrderIdStatus',
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'or100_orders',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('or102_orders_status');
  }
}
exports.CreateOrderStatus1698776883391 = CreateOrderStatus1698776883391;