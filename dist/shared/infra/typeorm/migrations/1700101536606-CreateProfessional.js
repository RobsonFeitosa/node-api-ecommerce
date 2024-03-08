"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProfessional1700101536606 = void 0;
var _typeorm = require("typeorm");
class CreateProfessional1700101536606 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'pr100_professional',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'user_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'team_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'function',
        type: 'varchar'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'invite',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'actived',
        type: 'boolean'
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
        name: 'ProfessionalUserId',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      }, {
        name: 'ProfessionalTeamId',
        columnNames: ['team_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'te100_team',
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      }]
    }));
    await queryRunner.createIndex('pr100_professional', new _typeorm.TableIndex({
      name: 'index_pr100_professional_user_id',
      columnNames: ['user_id']
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropIndex('pr100_professional', 'index_pr100_professional_user_id');
    await queryRunner.dropTable('pr100_professional');
  }
}
exports.CreateProfessional1700101536606 = CreateProfessional1700101536606;