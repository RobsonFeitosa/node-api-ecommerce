"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTeam1700101174965 = void 0;
var _typeorm = require("typeorm");
class CreateTeam1700101174965 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'te100_team',
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
        name: 'operation',
        type: 'varchar'
      }, {
        name: 'name',
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
        name: 'TeamUserId',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      }]
    }));
    await queryRunner.createIndex('te100_team', new _typeorm.TableIndex({
      name: 'idx_team_user_id',
      columnNames: ['user_id']
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropIndex('te100_team', 'idx_team_user_id');
    await queryRunner.dropTable('te100_team');
  }
}
exports.CreateTeam1700101174965 = CreateTeam1700101174965;