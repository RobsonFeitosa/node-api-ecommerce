"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateProductWish1629223731643 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'pd102_product_wish',
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
        name: 'user_id',
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
        name: 'UserId',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, {
        name: 'ProductId',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pd100_products',
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('pd102_product_wish');
  }
}
exports.default = CreateProductWish1629223731643;