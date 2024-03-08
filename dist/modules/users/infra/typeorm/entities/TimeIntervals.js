"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _Professional = _interopRequireDefault(require("./Professional"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
let TimeIntervals = (_dec = (0, _typeorm.Entity)('pr100_time_intervals'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)({
  nullable: true
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.ManyToOne)(() => _Professional.default, professional => professional.timeIntervals), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'professional_id'
}), _dec8 = Reflect.metadata("design:type", typeof _Professional.default === "undefined" ? Object : _Professional.default), _dec9 = (0, _typeorm.Column)(), _dec10 = Reflect.metadata("design:type", Number), _dec11 = (0, _typeorm.Column)(), _dec12 = Reflect.metadata("design:type", Number), _dec13 = (0, _typeorm.Column)(), _dec14 = Reflect.metadata("design:type", Number), _dec15 = (0, _typeorm.Column)({
  nullable: true
}), _dec16 = Reflect.metadata("design:type", Number), _dec17 = (0, _typeorm.Column)({
  nullable: true
}), _dec18 = Reflect.metadata("design:type", Number), _dec(_class = (_class2 = class TimeIntervals {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "professional_id", _descriptor2, this);
    _initializerDefineProperty(this, "professional", _descriptor3, this);
    _initializerDefineProperty(this, "week_day", _descriptor4, this);
    _initializerDefineProperty(this, "time_start_in_minutes_one", _descriptor5, this);
    _initializerDefineProperty(this, "time_end_in_minutes_one", _descriptor6, this);
    _initializerDefineProperty(this, "time_start_in_minutes_two", _descriptor7, this);
    _initializerDefineProperty(this, "time_end_in_minutes_two", _descriptor8, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "professional_id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "professional", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "week_day", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "time_start_in_minutes_one", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "time_end_in_minutes_one", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "time_start_in_minutes_two", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "time_end_in_minutes_two", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = exports.default = TimeIntervals;