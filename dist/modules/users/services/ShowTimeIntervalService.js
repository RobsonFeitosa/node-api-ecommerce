"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ITimeIntervalsRepository = _interopRequireDefault(require("../repositories/ITimeIntervalsRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let ShowTimeIntervalService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TimeIntervalsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ITimeIntervalsRepository.default === "undefined" ? Object : _ITimeIntervalsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ShowTimeIntervalService {
  constructor(timeIntervalsRepository) {
    this.timeIntervalsRepository = timeIntervalsRepository;
  }
  async execute(timeIntervalId) {
    const timeIntervals = await this.timeIntervalsRepository.findById(timeIntervalId);
    if (!timeIntervals) throw new _AppError.default('Time interval not found');
    return timeIntervals;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = ShowTimeIntervalService;