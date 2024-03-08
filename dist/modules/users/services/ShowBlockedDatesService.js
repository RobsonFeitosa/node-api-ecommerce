"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ITimeIntervalsRepository = _interopRequireDefault(require("../repositories/ITimeIntervalsRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProfessionalRepository = _interopRequireDefault(require("../repositories/IProfessionalRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let ShowBlockedDatesService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TimeIntervalsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProfessionalRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ITimeIntervalsRepository.default === "undefined" ? Object : _ITimeIntervalsRepository.default, typeof _IProfessionalRepository.default === "undefined" ? Object : _IProfessionalRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ShowBlockedDatesService {
  constructor(timeIntervalsRepository, professionalRepository) {
    this.timeIntervalsRepository = timeIntervalsRepository;
    this.professionalRepository = professionalRepository;
  }
  async execute(professionalId, year, month) {
    const professional = await this.professionalRepository.findById(professionalId);
    if (!professional) throw new _AppError.default('Professional not found');
    const availableWeekDays = await this.timeIntervalsRepository.findByProfessionalId(professionalId);
    const blockedWeekDays = [0, 1, 2, 3, 4, 5, 6].filter(weekDay => {
      return !availableWeekDays.some(availableWeekDay => availableWeekDay.week_day === weekDay);
    });
    const blockedDatesRaw = await this.timeIntervalsRepository.findBlockedDatesRow(professionalId, year, month);
    const blockedDates = blockedDatesRaw.map(item => Number(item.date));
    return {
      blockedWeekDays,
      blockedDates
    };
  }
}) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = ShowBlockedDatesService;