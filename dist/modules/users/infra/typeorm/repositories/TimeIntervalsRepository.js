"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TimeIntervals = _interopRequireDefault(require("../entities/TimeIntervals"));
var _typeorm = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TimeIntervalsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm.default.getRepository(_TimeIntervals.default);
  }
  async create(data) {
    const timeInterval = this.ormRepository.create(data);
    await this.ormRepository.save(timeInterval);
    return timeInterval;
  }
  async findById(id) {
    const timeInterval = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return timeInterval;
  }
  async findByProfessionalId(professionalId) {
    const timeIntervals = await this.ormRepository.find({
      where: {
        professional_id: professionalId
      }
    });
    return timeIntervals;
  }
  async findByProfessionalAndWeekDay(professionalId, weekDay) {
    const timeIntervals = await this.ormRepository.findOne({
      where: {
        professional_id: professionalId,
        week_day: weekDay
      }
    });
    return timeIntervals;
  }
  async findBlockedDatesRow(professionalId, year, month) {
    const dates = await this.ormRepository.query(` 
      select
        extract(day from ss.date) as date,
          COUNT(ss.date) as amount, 
          ((SUM(pti.time_end_in_minutes_one + pti.time_end_in_minutes_two) - SUM(pti.time_start_in_minutes_one + pti.time_start_in_minutes_two)) / 60)  as size   
      from
        sc100_schedulings ss 
      left join pr100_time_intervals pti 
            on
        pti.week_day = extract(isodow from date)   
      where
        ss.professional_id = '${professionalId}'
        and to_char(ss.date , 'yyyy-mm')  = '${year}-${month}'
      group by
        extract(day
      from
        ss.date),
        ((pti.time_end_in_minutes_one - pti.time_start_in_minutes_one) / 60)
      having
        COUNT(ss.date) >= ((SUM(pti.time_end_in_minutes_one + pti.time_end_in_minutes_two) - SUM(pti.time_start_in_minutes_one + pti.time_start_in_minutes_two)) / 60) 
      `);
    return dates;
  }
  async findAndCount(options) {
    const timeIntervals = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit
    });
    return timeIntervals;
  }
  async delete(id) {
    const timeInterval = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (timeInterval) {
      this.ormRepository.remove(timeInterval);
    }
  }
  async save(data) {
    return this.ormRepository.save(data);
  }
}
var _default = exports.default = TimeIntervalsRepository;