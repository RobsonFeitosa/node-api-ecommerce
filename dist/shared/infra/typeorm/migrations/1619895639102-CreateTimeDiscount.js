"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTimeDiscount1619895639102 = void 0;
var _typeorm = require("typeorm");
class CreateTimeDiscount1619895639102 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'ti100_time_discount',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'startDate',
        type: 'timestamp with time zone'
      }, {
        name: 'endDate',
        type: 'timestamp with time zone'
      }, {
        name: 'discount',
        type: 'int',
        isNullable: true
      }, {
        name: 'status',
        type: 'varchar'
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
    await queryRunner.dropTable('ti100_time_discount');
  }
}
exports.CreateTimeDiscount1619895639102 = CreateTimeDiscount1619895639102;