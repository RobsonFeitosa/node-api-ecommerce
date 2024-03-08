"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSchedulings1700102149562 = void 0;
var _typeorm = require("typeorm");
class CreateSchedulings1700102149562 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'sc100_schedulings',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'professional_id',
        type: 'uuid'
      }, {
        name: 'date',
        type: 'timestamp with time zone'
      }, {
        name: 'order_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'observations',
        type: 'varchar'
      }],
      foreignKeys: [{
        name: 'SchedulingUserId',
        columnNames: ['professional_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pr100_professional',
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      }, {
        name: 'SchedulingOrderId',
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'or100_orders',
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      }]
    }));
    await queryRunner.createIndex('sc100_schedulings', new _typeorm.TableIndex({
      name: 'idx_sc100_schedulings_professional_id',
      columnNames: ['professional_id']
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropIndex('sc100_schedulings', 'idx_sc100_schedulings_professional_id');
    await queryRunner.dropTable('sc100_schedulings');
  }
}
exports.CreateSchedulings1700102149562 = CreateSchedulings1700102149562;