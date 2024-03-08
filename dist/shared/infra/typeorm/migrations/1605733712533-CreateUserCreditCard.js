"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
class CreateUserCreditCard1605733712533 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'credit_cards',
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
        name: 'card_id',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'number',
        type: 'varchar'
      }, {
        name: 'holder_name',
        type: 'varchar'
      }, {
        name: 'expiration_date',
        type: 'varchar'
      }, {
        name: 'brand',
        type: 'varchar'
      }, {
        name: 'actived',
        type: 'boolean',
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
        name: 'CreditCardUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('credit_cards');
  }
}
exports.default = CreateUserCreditCard1605733712533;