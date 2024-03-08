"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _User = _interopRequireDefault(require("../../../../users/infra/typeorm/entities/User"));
var _Address = _interopRequireDefault(require("../../../../users/infra/typeorm/entities/Address"));
var _OrdersStatus = _interopRequireDefault(require("./OrdersStatus"));
var _OrderProduct = _interopRequireDefault(require("./OrderProduct"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
let Orders = (_dec = (0, _typeorm.Entity)('or100_orders'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)('uuid'), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.OneToOne)(() => _User.default, {
  eager: true
}), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'user_id'
}), _dec8 = Reflect.metadata("design:type", typeof _User.default === "undefined" ? Object : _User.default), _dec9 = (0, _typeorm.OneToOne)(() => _Address.default, {
  eager: true,
  nullable: true
}), _dec10 = (0, _typeorm.JoinColumn)({
  name: 'address_id'
}), _dec11 = Reflect.metadata("design:type", typeof _Address.default === "undefined" ? Object : _Address.default), _dec12 = (0, _typeorm.Column)(), _dec13 = Reflect.metadata("design:type", String), _dec14 = (0, _typeorm.Column)(), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.OneToMany)(() => _OrdersStatus.default, orderStatus => orderStatus.order, {
  eager: true,
  cascade: true
}), _dec17 = Reflect.metadata("design:type", typeof _OrdersStatus.default === "undefined" ? Object : _OrdersStatus.default), _dec18 = (0, _typeorm.Column)(), _dec19 = Reflect.metadata("design:type", String), _dec20 = (0, _typeorm.Column)(), _dec21 = Reflect.metadata("design:type", String), _dec22 = (0, _typeorm.Column)(), _dec23 = Reflect.metadata("design:type", String), _dec24 = (0, _typeorm.Column)(), _dec25 = Reflect.metadata("design:type", Number), _dec26 = (0, _typeorm.Column)(), _dec27 = Reflect.metadata("design:type", String), _dec28 = (0, _typeorm.Column)(), _dec29 = Reflect.metadata("design:type", String), _dec30 = (0, _typeorm.OneToMany)(() => _OrderProduct.default, order_product => order_product.order, {
  eager: true,
  cascade: true
}), _dec31 = Reflect.metadata("design:type", Array), _dec32 = (0, _typeorm.CreateDateColumn)(), _dec33 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec34 = (0, _typeorm.UpdateDateColumn)(), _dec35 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class Orders {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "user_id", _descriptor2, this);
    _initializerDefineProperty(this, "user", _descriptor3, this);
    _initializerDefineProperty(this, "address", _descriptor4, this);
    _initializerDefineProperty(this, "cod_order", _descriptor5, this);
    _initializerDefineProperty(this, "professional_name", _descriptor6, this);
    _initializerDefineProperty(this, "status", _descriptor7, this);
    _initializerDefineProperty(this, "coupon_applied", _descriptor8, this);
    _initializerDefineProperty(this, "freight", _descriptor9, this);
    _initializerDefineProperty(this, "payment_method", _descriptor10, this);
    _initializerDefineProperty(this, "amount", _descriptor11, this);
    _initializerDefineProperty(this, "type_product", _descriptor12, this);
    _initializerDefineProperty(this, "tracking_code", _descriptor13, this);
    _initializerDefineProperty(this, "orders_products", _descriptor14, this);
    _initializerDefineProperty(this, "created_at", _descriptor15, this);
    _initializerDefineProperty(this, "updated_at", _descriptor16, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "user_id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "address", [_dec9, _dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cod_order", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "professional_name", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "coupon_applied", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "freight", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "payment_method", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "type_product", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "tracking_code", [_dec28, _dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "orders_products", [_dec30, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec32, _dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec34, _dec35], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = exports.default = Orders;