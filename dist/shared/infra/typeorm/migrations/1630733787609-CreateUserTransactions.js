"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateUserTransactions1605733787609 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'user_transactions',
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
        name: 'order_id',
        type: 'uuid'
      }, {
        name: 'amount',
        type: 'int'
      }, {
        name: 'status',
        type: 'varchar'
      }, {
        name: 'payment_method',
        type: 'varchar'
      }, {
        name: 'brand',
        type: 'varchar'
      }, {
        name: 'tid',
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
        name: 'TransactionUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
      // {
      //   name: 'TransactionOrder',
      //   columnNames: ['order_id'],
      //   referencedColumnNames: ['id'],
      //   referencedTableName: 'or100_orders',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // },
      ]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('user_transactions');
  }
}
exports.default = CreateUserTransactions1605733787609;