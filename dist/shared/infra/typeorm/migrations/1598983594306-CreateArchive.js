"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateArchive1598983594306 = void 0;
var _typeorm = require("typeorm");
class CreateArchive1598983594306 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'ar100_archives',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'origin_target',
        type: 'varchar'
      }, {
        name: 'reference_id',
        type: 'uuid'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'is_primary',
        type: 'boolean',
        default: false
      }, {
        name: 'size',
        type: 'varchar'
      }, {
        name: 'type',
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
    await queryRunner.dropTable('ar100_archives');
  }
}
exports.CreateArchive1598983594306 = CreateArchive1598983594306;