"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCoupon1698626495658 = void 0;
var _typeorm = require("typeorm");
class CreateCoupon1698626495658 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'cp100_coupon',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'code_coupon',
        type: 'varchar'
      }, {
        name: 'status',
        type: 'varchar'
      }, {
        name: 'discount',
        type: 'int'
      }, {
        name: 'validation',
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
    await queryRunner.dropTable('cp100_coupon');
  }
}
exports.CreateCoupon1698626495658 = CreateCoupon1698626495658;