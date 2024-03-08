"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _upload = _interopRequireDefault(require("../../../../../config/upload"));
var _classTransformer = require("class-transformer");
var _User = _interopRequireDefault(require("./User"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
let UserSettings = (_dec = (0, _typeorm.Entity)('users_settings'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = (0, _classTransformer.Exclude)(), _dec4 = Reflect.metadata("design:type", String), _dec5 = (0, _typeorm.Column)({
  nullable: true
}), _dec6 = Reflect.metadata("design:type", String), _dec7 = (0, _typeorm.Column)(), _dec8 = Reflect.metadata("design:type", Number), _dec9 = (0, _typeorm.Column)({
  nullable: true
}), _dec10 = (0, _classTransformer.Exclude)(), _dec11 = Reflect.metadata("design:type", String), _dec12 = (0, _typeorm.Column)(), _dec13 = Reflect.metadata("design:type", Boolean), _dec14 = (0, _typeorm.Column)({
  nullable: true
}), _dec15 = (0, _classTransformer.Exclude)(), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.OneToOne)(() => _User.default), _dec18 = Reflect.metadata("design:type", typeof _User.default === "undefined" ? Object : _User.default), _dec19 = (0, _typeorm.CreateDateColumn)(), _dec20 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec21 = (0, _typeorm.UpdateDateColumn)(), _dec22 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec23 = (0, _classTransformer.Expose)({
  name: 'avatar_url'
}), _dec24 = Reflect.metadata("design:type", Function), _dec25 = Reflect.metadata("design:paramtypes", []), _dec(_class = (_class2 = class UserSettings {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "avatar", _descriptor2, this);
    _initializerDefineProperty(this, "level", _descriptor3, this);
    _initializerDefineProperty(this, "cpf", _descriptor4, this);
    _initializerDefineProperty(this, "actived", _descriptor5, this);
    _initializerDefineProperty(this, "phone_number", _descriptor6, this);
    _initializerDefineProperty(this, "user", _descriptor7, this);
    _initializerDefineProperty(this, "created_at", _descriptor8, this);
    _initializerDefineProperty(this, "updated_at", _descriptor9, this);
  }
  getAvatarUrl() {
    if (!this.avatar) {
      return null;
    }
    switch (_upload.default.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.avatar}`;
      case 's3':
        return `https://${_upload.default.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;
      default:
        return null;
    }
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cpf", [_dec9, _dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "actived", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "phone_number", [_dec14, _dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "getAvatarUrl", [_dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "getAvatarUrl"), _class2.prototype)), _class2)) || _class);
var _default = exports.default = UserSettings;