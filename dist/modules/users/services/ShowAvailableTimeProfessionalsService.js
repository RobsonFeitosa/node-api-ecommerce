"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ITimeIntervalsRepository = _interopRequireDefault(require("../repositories/ITimeIntervalsRepository"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _IScheduleRepository = _interopRequireDefault(require("../../schedule/repositories/IScheduleRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let ShowAvailableTimeProfessionalsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TimeIntervalsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ScheduleRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ITimeIntervalsRepository.default === "undefined" ? Object : _ITimeIntervalsRepository.default, typeof _IScheduleRepository.default === "undefined" ? Object : _IScheduleRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ShowAvailableTimeProfessionalsService {
  constructor(timeIntervalsRepository, scheduleRepository) {
    this.timeIntervalsRepository = timeIntervalsRepository;
    this.scheduleRepository = scheduleRepository;
  }
  async execute(professionalId, date) {
    console.log({
      date,
      professionalId
    });
    const referenceDate = (0, _dayjs.default)(String(date));
    const professionalAvailable = await this.timeIntervalsRepository.findByProfessionalAndWeekDay(professionalId, referenceDate.get('day'));
    if (!professionalAvailable) {
      return {
        possibleTimes: [],
        availableTimes: []
      };
    }
    const {
      time_start_in_minutes_one,
      time_end_in_minutes_one,
      time_start_in_minutes_two,
      time_end_in_minutes_two
    } = professionalAvailable;
    const startHour = time_start_in_minutes_one / 60;
    const endHour = time_end_in_minutes_one / 60;
    console.log({
      professionalAvailable
    });
    const startHourTwo = time_start_in_minutes_two / 60;
    const endHourTwo = time_end_in_minutes_two / 60;
    console.log({
      startHour,
      endHour,
      startHourTwo,
      endHourTwo
    });
    const possibleTimesOne = Array.from({
      length: endHour - startHour
    }).map((_, i) => {
      return startHour + i;
    });
    const possibleTimesTwo = Array.from({
      length: endHourTwo - startHourTwo
    }).map((_, i) => {
      return startHourTwo + i;
    });
    const blockedTimes = await this.scheduleRepository.findByProfessionalIdAndDates(professionalId, referenceDate.set('hour', startHour).toDate(), referenceDate.set('hour', endHour).toDate());
    const blockedTimesTwo = await this.scheduleRepository.findByProfessionalIdAndDates(professionalId, referenceDate.set('hour', startHourTwo).toDate(), referenceDate.set('hour', endHourTwo).toDate());
    console.log({
      blockedTimes
    });
    const availableTimesOne = possibleTimesOne.filter(time => {
      const isTimeBlocked = blockedTimes.some(blockedTime => blockedTime.date.getHours() === time);
      const isTimeInPast = referenceDate.set('hour', time).isBefore(new Date());
      return !isTimeBlocked && !isTimeInPast;
    });
    const availableTimesTwo = possibleTimesTwo.filter(time => {
      const isTimeBlocked = blockedTimesTwo.some(blockedTime => blockedTime.date.getHours() === time);
      const isTimeInPast = referenceDate.set('hour', time).isBefore(new Date());
      return !isTimeBlocked && !isTimeInPast;
    });
    console.log({
      availableTimesTwo,
      possibleTimesTwo
    });
    const availableTimes = availableTimesOne.concat(availableTimesTwo);
    const possibleTimes = possibleTimesOne.concat(possibleTimesTwo);
    return {
      possibleTimes,
      availableTimes
    };
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = ShowAvailableTimeProfessionalsService;