"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IProductProviderRepository = _interopRequireDefault(require("../repositories/IProductProviderRepository"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateProviderService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductProviderRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProductProviderRepository.default === "undefined" ? Object : _IProductProviderRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateProviderService {
  constructor(productProviderRepository) {
    this.productProviderRepository = productProviderRepository;
  }
  async execute(payload, providerId) {
    const provider = await this.productProviderRepository.findById(providerId);
    if (!provider) {
      throw new _AppError.default('Provider not found');
    }
    provider.name = payload.name;
    provider.address = payload.address;
    provider.email = payload.email;
    provider.phone1 = payload.phone1;
    provider.phone2 = payload.phone2;
    await this.productProviderRepository.save(provider);
    return provider;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateProviderService;