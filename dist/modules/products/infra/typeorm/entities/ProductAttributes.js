"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _ProductVariations = _interopRequireDefault(require("./ProductVariations"));
var _Product = _interopRequireDefault(require("./Product"));
var _classTransformer = require("class-transformer");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
let ProductAttributes = (_dec = (0, _typeorm.Entity)('pd105_products_attributes'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.OneToOne)(() => _Product.default, {
  cascade: true
}), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'product_id'
}), _dec8 = Reflect.metadata("design:type", typeof _Product.default === "undefined" ? Object : _Product.default), _dec9 = (0, _typeorm.Column)(), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.Column)(), _dec12 = (0, _classTransformer.Exclude)(), _dec13 = Reflect.metadata("design:type", String), _dec14 = (0, _classTransformer.Expose)({
  name: 'options'
}), _dec15 = Reflect.metadata("design:type", Function), _dec16 = Reflect.metadata("design:paramtypes", []), _dec17 = (0, _typeorm.OneToMany)(() => _ProductVariations.default, productsVariations => productsVariations.product_attr, {
  eager: true
}), _dec18 = Reflect.metadata("design:type", Array), _dec19 = (0, _typeorm.CreateDateColumn)(), _dec20 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec21 = (0, _typeorm.UpdateDateColumn)(), _dec22 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class ProductAttributes {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "product_id", _descriptor2, this);
    _initializerDefineProperty(this, "product", _descriptor3, this);
    _initializerDefineProperty(this, "name", _descriptor4, this);
    _initializerDefineProperty(this, "options", _descriptor5, this);
    _initializerDefineProperty(this, "variations", _descriptor6, this);
    _initializerDefineProperty(this, "created_at", _descriptor7, this);
    _initializerDefineProperty(this, "updated_at", _descriptor8, this);
  }
  get optionsParse() {
    return JSON.parse(this.options);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "product_id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "product", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "options", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "optionsParse", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "optionsParse"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "variations", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = exports.default = ProductAttributes;