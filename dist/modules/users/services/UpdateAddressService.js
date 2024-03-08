"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IAddressRepository = _interopRequireDefault(require("../repositories/IAddressRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateAddressService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AddressRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IAddressRepository.default === "undefined" ? Object : _IAddressRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateAddressService {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }
  async execute({
    addressId,
    zipcode,
    city,
    state,
    country,
    neighborhood,
    street,
    streetNumber
  }) {
    const address = await this.addressRepository.findById(addressId);
    if (!address) throw new _AppError.default('Address not found');
    address.zipcode = zipcode;
    address.city = city;
    address.state = state;
    address.country = country;
    address.neighborhood = neighborhood;
    address.street = street;
    address.street_number = streetNumber;
    return this.addressRepository.save(address);
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateAddressService;