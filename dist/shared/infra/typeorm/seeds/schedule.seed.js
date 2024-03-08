"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Schedule = _interopRequireDefault(require("../../../../modules/schedule/infra/typeorm/entities/Schedule"));
var _Professional = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/Professional"));
var _scheduleData = require("./data/schedule-data");
var _Order = _interopRequireDefault(require("../../../../modules/orders/infra/typeorm/entities/Order"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ScheduleDatabaseSeed {
  async run(factory, connection) {
    const professionals = await connection.getRepository(_Professional.default).createQueryBuilder('pr100_professional').getMany();
    const orders = await connection.getRepository(_Order.default).createQueryBuilder('or100_orders').getMany();
    await connection.createQueryBuilder().insert().into(_Schedule.default).values(_scheduleData.scheduleData.map((schedule, index) => {
      if (index === 0) {
        schedule.professional = professionals[0];
        schedule.order = orders[3];
      }
      if (index === 1) {
        schedule.professional = professionals[1];
        schedule.order = orders[4];
      }
      if (index === 2) {
        schedule.professional = professionals[2];
        schedule.order = orders[5];
      }
      if (index === 3) {
        schedule.professional = professionals[3];
        schedule.order = orders[6];
      }
      if (index === 4) {
        schedule.professional = professionals[4];
        schedule.order = orders[7];
      }
      return schedule;
    })).execute();
  }
}
exports.default = ScheduleDatabaseSeed;