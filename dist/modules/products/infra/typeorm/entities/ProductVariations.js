"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _Product = _interopRequireDefault(require("./Product"));
var _classTransformer = require("class-transformer");
var _Archive = _interopRequireDefault(require("../../../../archives/infra/typeorm/entities/Archive"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
let ProductVariations = (_dec = (0, _typeorm.Entity)('pd106_products_variations'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.OneToOne)(() => _Product.default, {
  cascade: true
}), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'product_attr_id'
}), _dec8 = Reflect.metadata("design:type", typeof _Product.default === "undefined" ? Object : _Product.default), _dec9 = (0, _typeorm.Column)(), _dec10 = Reflect.metadata("design:type", Number), _dec11 = (0, _typeorm.Column)(), _dec12 = Reflect.metadata("design:type", String), _dec13 = (0, _typeorm.Column)({
  nullable: true
}), _dec14 = Reflect.metadata("design:type", Number), _dec15 = (0, _typeorm.Column)({
  nullable: true
}), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.Column)(), _dec18 = Reflect.metadata("design:type", Boolean), _dec19 = (0, _typeorm.Column)({
  nullable: true
}), _dec20 = Reflect.metadata("design:type", Number), _dec21 = (0, _classTransformer.Exclude)(), _dec22 = (0, _typeorm.Column)({
  nullable: true
}), _dec23 = Reflect.metadata("design:type", String), _dec24 = (0, _classTransformer.Expose)({
  name: 'dimensions'
}), _dec25 = Reflect.metadata("design:type", Function), _dec26 = Reflect.metadata("design:paramtypes", []), _dec27 = (0, _typeorm.OneToOne)(() => _Archive.default, archive => archive.referenceImage, {
  eager: true
}), _dec28 = Reflect.metadata("design:type", typeof _Archive.default === "undefined" ? Object : _Archive.default), _dec29 = (0, _typeorm.Column)({
  nullable: true
}), _dec30 = Reflect.metadata("design:type", String), _dec31 = (0, _typeorm.CreateDateColumn)(), _dec32 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec33 = (0, _typeorm.UpdateDateColumn)(), _dec34 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class ProductVariations {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "product_attr_id", _descriptor2, this);
    _initializerDefineProperty(this, "product_attr", _descriptor3, this);
    _initializerDefineProperty(this, "price", _descriptor4, this);
    _initializerDefineProperty(this, "name", _descriptor5, this);
    _initializerDefineProperty(this, "quantity", _descriptor6, this);
    _initializerDefineProperty(this, "time", _descriptor7, this);
    _initializerDefineProperty(this, "actived", _descriptor8, this);
    _initializerDefineProperty(this, "weight", _descriptor9, this);
    _initializerDefineProperty(this, "dimensions", _descriptor10, this);
    _initializerDefineProperty(this, "image", _descriptor11, this);
    _initializerDefineProperty(this, "sku", _descriptor12, this);
    _initializerDefineProperty(this, "created_at", _descriptor13, this);
    _initializerDefineProperty(this, "updated_at", _descriptor14, this);
  }
  get dimensionsParse() {
    return this.dimensions && JSON.parse(this.dimensions ?? {});
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "product_attr_id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "product_attr", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "price", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "quantity", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "actived", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "weight", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "dimensions", [_dec21, _dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "dimensionsParse", [_dec24, _dec25, _dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "dimensionsParse"), _class2.prototype), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "image", [_dec27, _dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sku", [_dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = exports.default = ProductVariations;