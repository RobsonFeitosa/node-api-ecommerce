"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateOrder1629247983813 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'or100_orders',
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
        name: 'cod_order',
        type: 'varchar'
      }, {
        name: 'freight',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'professional_name',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'coupon_applied',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'tracking_code',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'type_product',
        type: 'varchar'
      }, {
        name: 'amount',
        type: 'int'
      }, {
        name: 'payment_method',
        type: 'varchar'
      }, {
        name: 'address_id',
        type: 'uuid',
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
        name: 'UserId',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, {
        name: 'OrderAddress',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'address',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('or100_orders');
  }
}
exports.default = CreateOrder1629247983813;