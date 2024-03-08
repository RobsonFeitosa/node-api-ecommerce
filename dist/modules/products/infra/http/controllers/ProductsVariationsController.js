"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
var _CreateProductVariationsService = _interopRequireDefault(require("../../../services/CreateProductVariationsService"));
var _ShowProductVariationService = _interopRequireDefault(require("../../../services/ShowProductVariationService"));
var _UpdateProductVariationService = _interopRequireDefault(require("../../../services/UpdateProductVariationService"));
var _DeleteProductVariationService = _interopRequireDefault(require("../../../services/DeleteProductVariationService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductsVariationsController {
  async create(request, response) {
    const data = request.body;
    const {
      attributeId
    } = request.params;
    const createproductData = _tsyringe.container.resolve(_CreateProductVariationsService.default);
    const productData = await createproductData.execute({
      payload: data,
      attributeId
    });
    return response.json((0, _classTransformer.classToClass)(productData));
  }
  async show(request, response) {
    const {
      attributeId,
      variationId
    } = request.params;
    const showVariation = _tsyringe.container.resolve(_ShowProductVariationService.default);
    const variation = await showVariation.execute({
      variationId,
      attributeId
    });
    return response.json((0, _classTransformer.classToClass)(variation));
  }
  async update(request, response) {
    const data = request.body;
    const {
      attributeId,
      variationId
    } = request.params;
    const updateVariation = _tsyringe.container.resolve(_UpdateProductVariationService.default);
    const variation = await updateVariation.execute({
      payload: data,
      attributeId,
      variationId
    });
    return response.json((0, _classTransformer.classToClass)(variation));
  }
  async delete(request, response) {
    const {
      attributeId,
      variationId
    } = request.params;
    const variation = _tsyringe.container.resolve(_DeleteProductVariationService.default);
    await variation.execute(variationId, attributeId);
    return response.status(204).send();
  }
}
exports.default = ProductsVariationsController;