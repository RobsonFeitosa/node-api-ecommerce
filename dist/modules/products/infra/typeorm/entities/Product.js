"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _ProductWish = _interopRequireDefault(require("./ProductWish"));
var _ProductData = _interopRequireDefault(require("./ProductData"));
var _ProductAttributes = _interopRequireDefault(require("./ProductAttributes"));
var _classTransformer = require("class-transformer");
var _Archive = _interopRequireDefault(require("../../../../archives/infra/typeorm/entities/Archive"));
var _TimeDiscount = _interopRequireDefault(require("./TimeDiscount"));
var _Team = _interopRequireDefault(require("../../../../users/infra/typeorm/entities/Team"));
var _OrderProduct = _interopRequireDefault(require("../../../../orders/infra/typeorm/entities/OrderProduct"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
let Product = (_dec = (0, _typeorm.Entity)('pd100_products'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)('decimal', {
  precision: 10,
  scale: 2,
  nullable: true
}), _dec9 = Reflect.metadata("design:type", Number), _dec10 = (0, _typeorm.Column)('decimal', {
  precision: 10,
  scale: 2,
  nullable: true
}), _dec11 = Reflect.metadata("design:type", Number), _dec12 = (0, _typeorm.Column)({
  nullable: true
}), _dec13 = Reflect.metadata("design:type", String), _dec14 = (0, _typeorm.Column)({
  nullable: true
}), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.Column)({
  nullable: true
}), _dec17 = Reflect.metadata("design:type", String), _dec18 = (0, _typeorm.Column)({
  default: 'product'
}), _dec19 = Reflect.metadata("design:type", String), _dec20 = (0, _typeorm.Column)(), _dec21 = Reflect.metadata("design:type", String), _dec22 = (0, _typeorm.Column)({
  nullable: true
}), _dec23 = Reflect.metadata("design:type", Boolean), _dec24 = (0, _typeorm.Column)({
  nullable: true
}), _dec25 = Reflect.metadata("design:type", String), _dec26 = (0, _typeorm.Column)({
  nullable: true
}), _dec27 = Reflect.metadata("design:type", String), _dec28 = (0, _typeorm.Column)({
  nullable: true
}), _dec29 = Reflect.metadata("design:type", String), _dec30 = (0, _classTransformer.Expose)({
  name: 'categories'
}), _dec31 = Reflect.metadata("design:type", Function), _dec32 = Reflect.metadata("design:paramtypes", []), _dec33 = (0, _classTransformer.Expose)(), _dec34 = Reflect.metadata("design:type", Array), _dec35 = (0, _typeorm.OneToMany)(() => _OrderProduct.default, order_product => order_product.product), _dec36 = Reflect.metadata("design:type", Array), _dec37 = (0, _typeorm.OneToOne)(() => _ProductWish.default, wish => wish.product, {
  nullable: true
}), _dec38 = Reflect.metadata("design:type", typeof _ProductWish.default === "undefined" ? Object : _ProductWish.default), _dec39 = (0, _typeorm.OneToOne)(() => _ProductData.default, product_data => product_data.product, {
  eager: true
}), _dec40 = Reflect.metadata("design:type", typeof _ProductData.default === "undefined" ? Object : _ProductData.default), _dec41 = (0, _typeorm.Column)({
  nullable: true
}), _dec42 = Reflect.metadata("design:type", String), _dec43 = (0, _typeorm.ManyToOne)(() => _TimeDiscount.default, time_discount => time_discount.products), _dec44 = (0, _typeorm.JoinColumn)({
  name: 'time_discount_id'
}), _dec45 = Reflect.metadata("design:type", typeof _TimeDiscount.default === "undefined" ? Object : _TimeDiscount.default), _dec46 = (0, _typeorm.OneToMany)(() => _ProductAttributes.default, product_data => product_data.product, {
  eager: true
}), _dec47 = Reflect.metadata("design:type", Array), _dec48 = (0, _typeorm.OneToMany)(() => _Archive.default, archive => archive.referenceImage, {
  eager: true
}), _dec49 = Reflect.metadata("design:type", Array), _dec50 = (0, _typeorm.Column)({
  nullable: true
}), _dec51 = Reflect.metadata("design:type", String), _dec52 = (0, _typeorm.ManyToMany)(() => _Team.default, team => team.products), _dec53 = Reflect.metadata("design:type", Array), _dec54 = (0, _typeorm.DeleteDateColumn)({
  nullable: true
}), _dec55 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec56 = (0, _typeorm.CreateDateColumn)({
  name: 'created_at'
}), _dec57 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec58 = (0, _typeorm.UpdateDateColumn)({
  name: 'updated_at'
}), _dec59 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class Product {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "name", _descriptor2, this);
    _initializerDefineProperty(this, "cod_product", _descriptor3, this);
    _initializerDefineProperty(this, "price", _descriptor4, this);
    _initializerDefineProperty(this, "old_price", _descriptor5, this);
    _initializerDefineProperty(this, "description", _descriptor6, this);
    _initializerDefineProperty(this, "short_description", _descriptor7, this);
    _initializerDefineProperty(this, "mode_data", _descriptor8, this);
    _initializerDefineProperty(this, "type", _descriptor9, this);
    _initializerDefineProperty(this, "slug", _descriptor10, this);
    _initializerDefineProperty(this, "emphasis", _descriptor11, this);
    _initializerDefineProperty(this, "categories", _descriptor12, this);
    _initializerDefineProperty(this, "visibility", _descriptor13, this);
    _initializerDefineProperty(this, "published", _descriptor14, this);
    _initializerDefineProperty(this, "categories_items", _descriptor15, this);
    _initializerDefineProperty(this, "orders_products", _descriptor16, this);
    _initializerDefineProperty(this, "wish", _descriptor17, this);
    _initializerDefineProperty(this, "product_data", _descriptor18, this);
    _initializerDefineProperty(this, "time_discount_id", _descriptor19, this);
    _initializerDefineProperty(this, "time_discount", _descriptor20, this);
    _initializerDefineProperty(this, "attributes", _descriptor21, this);
    _initializerDefineProperty(this, "images", _descriptor22, this);
    _initializerDefineProperty(this, "time", _descriptor23, this);
    _initializerDefineProperty(this, "team", _descriptor24, this);
    _initializerDefineProperty(this, "deleted_at", _descriptor25, this);
    _initializerDefineProperty(this, "created_at", _descriptor26, this);
    _initializerDefineProperty(this, "updated_at", _descriptor27, this);
  }
  get categoriesParse() {
    return this.categories && JSON.parse(this.categories);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cod_product", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "price", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "old_price", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "short_description", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "mode_data", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "slug", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "emphasis", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "categories", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "visibility", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "published", [_dec28, _dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "categoriesParse", [_dec30, _dec31, _dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "categoriesParse"), _class2.prototype), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "categories_items", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "orders_products", [_dec35, _dec36], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "wish", [_dec37, _dec38], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "product_data", [_dec39, _dec40], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "time_discount_id", [_dec41, _dec42], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "time_discount", [_dec43, _dec44, _dec45], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "attributes", [_dec46, _dec47], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "images", [_dec48, _dec49], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec50, _dec51], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "team", [_dec52, _dec53], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "deleted_at", [_dec54, _dec55], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec56, _dec57], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec58, _dec59], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = exports.default = Product;