"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IScheduleRepository = _interopRequireDefault(require("../repositories/IScheduleRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateScheduleService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ScheduleRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IScheduleRepository.default === "undefined" ? Object : _IScheduleRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateScheduleService {
  constructor(scheduleRepository) {
    this.scheduleRepository = scheduleRepository;
  }
  async execute(payload) {
    const schedule = await this.scheduleRepository.create(payload);
    return schedule;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateScheduleService;