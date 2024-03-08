"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateAddressService = _interopRequireDefault(require("../../../services/CreateAddressService"));
var _ShowAddressService = _interopRequireDefault(require("../../../services/ShowAddressService"));
var _UpdateAddressService = _interopRequireDefault(require("../../../services/UpdateAddressService"));
var _IndexAddressService = _interopRequireDefault(require("../../../services/IndexAddressService"));
var _UpdatePrimaryAddressService = _interopRequireDefault(require("../../../services/UpdatePrimaryAddressService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AddressController {
  async create(req, res) {
    const user_id = req.user.id;
    const createAddress = _tsyringe.container.resolve(_CreateAddressService.default);
    const address = await createAddress.execute({
      ...req.body,
      user_id
    });
    return res.json(address);
  }
  async show(req, res) {
    const userId = req.user.id;
    const showAddress = _tsyringe.container.resolve(_ShowAddressService.default);
    const address = await showAddress.execute(userId);
    return res.json(address);
  }
  async updatePrimary(req, res) {
    const {
      addressId
    } = req.params;
    const updateAddress = _tsyringe.container.resolve(_UpdatePrimaryAddressService.default);
    await updateAddress.execute(addressId);
    return res.status(200).json();
  }
  async update(req, res) {
    const {
      addressId
    } = req.params;
    const {
      zipcode,
      city,
      state,
      country,
      neighborhood,
      street,
      street_number
    } = req.body;
    const updateAddress = _tsyringe.container.resolve(_UpdateAddressService.default);
    const address = await updateAddress.execute({
      addressId,
      zipcode,
      city,
      state,
      country,
      neighborhood,
      street,
      streetNumber: street_number
    });
    return res.json(address);
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const indexAddress = _tsyringe.container.resolve(_IndexAddressService.default);
    const address = await indexAddress.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json(address);
  }
}
exports.default = AddressController;