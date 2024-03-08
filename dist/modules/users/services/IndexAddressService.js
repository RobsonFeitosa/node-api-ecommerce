"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IAddressRepository = _interopRequireDefault(require("../repositories/IAddressRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexAddressService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AddressRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IAddressRepository.default === "undefined" ? Object : _IAddressRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class IndexAddressService {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }
  async execute(options) {
    const address = await this.addressRepository.findAndCount(options);
    return address;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexAddressService;