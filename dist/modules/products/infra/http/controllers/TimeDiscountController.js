"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
var _CreateTimeDiscountService = _interopRequireDefault(require("../../../services/CreateTimeDiscountService"));
var _IndexTimeDiscountService = _interopRequireDefault(require("../../../services/IndexTimeDiscountService"));
var _ShowTimeDiscountService = _interopRequireDefault(require("../../../services/ShowTimeDiscountService"));
var _DeleteTimeDiscountService = _interopRequireDefault(require("../../../services/DeleteTimeDiscountService"));
var _IndexTimeDiscountAvailableProduct = _interopRequireDefault(require("../../../services/IndexTimeDiscountAvailableProduct"));
var _UpdateTimeDiscountService = _interopRequireDefault(require("../../../services/UpdateTimeDiscountService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TimeDiscountController {
  async create(request, response) {
    const data = request.body;
    const createService = _tsyringe.container.resolve(_CreateTimeDiscountService.default);
    const timeDiscount = await createService.execute(data);
    return response.json((0, _classTransformer.classToClass)(timeDiscount));
  }
  async update(request, response) {
    const data = request.body;
    const {
      timeDiscountId
    } = request.params;
    const updatService = _tsyringe.container.resolve(_UpdateTimeDiscountService.default);
    const timeDiscount = await updatService.execute(timeDiscountId, data);
    return response.json((0, _classTransformer.classToClass)(timeDiscount));
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const indexService = _tsyringe.container.resolve(_IndexTimeDiscountService.default);
    const timeDiscounts = await indexService.execute({
      page: Number(page),
      limit: Number(limit)
    });
    return response.json((0, _classTransformer.classToClass)(timeDiscounts));
  }
  async indexOptionsProducts(request, response) {
    const indexService = _tsyringe.container.resolve(_IndexTimeDiscountAvailableProduct.default);
    const timeDiscounts = await indexService.execute();
    return response.json((0, _classTransformer.classToClass)(timeDiscounts));
  }
  async show(request, response) {
    const {
      timeDiscountId
    } = request.params;
    const showService = _tsyringe.container.resolve(_ShowTimeDiscountService.default);
    const timeDiscount = await showService.execute(timeDiscountId);
    return response.json((0, _classTransformer.classToClass)(timeDiscount));
  }
  async delete(request, response) {
    const {
      timeDiscountId
    } = request.params;
    const deleteService = _tsyringe.container.resolve(_DeleteTimeDiscountService.default);
    await deleteService.execute(timeDiscountId);
    return response.status(204).send();
  }
}
exports.default = TimeDiscountController;