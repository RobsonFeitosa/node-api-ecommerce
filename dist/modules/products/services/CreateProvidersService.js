"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductProviderRepository = _interopRequireDefault(require("../repositories/IProductProviderRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateProvidersService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductProviderRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProductProviderRepository.default === "undefined" ? Object : _IProductProviderRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateProvidersService {
  constructor(productProviderRepository) {
    this.productProviderRepository = productProviderRepository;
  }
  async execute(payload) {
    const provider = await this.productProviderRepository.create(payload);
    return provider;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateProvidersService;