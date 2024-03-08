"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProductTeam1702671777450 = void 0;
var _typeorm = require("typeorm");
class CreateProductTeam1702671777450 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'te100_pd100_team_product',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'team_id',
        type: 'uuid'
      }, {
        name: 'product_id',
        type: 'uuid'
      }],
      foreignKeys: [{
        name: 'ProductTeamId',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pd100_products',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }, {
        name: 'TeamProductId',
        columnNames: ['team_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'te100_team',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('te100_pd100_team_product');
  }
}
exports.CreateProductTeam1702671777450 = CreateProductTeam1702671777450;