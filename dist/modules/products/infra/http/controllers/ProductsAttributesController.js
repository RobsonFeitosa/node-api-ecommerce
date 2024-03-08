"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
var _ShowProductService = _interopRequireDefault(require("../../../services/ShowProductService"));
var _CreateProductAttributeService = _interopRequireDefault(require("../../../services/CreateProductAttributeService"));
var _UpdateProductAttributeService = _interopRequireDefault(require("../../../services/UpdateProductAttributeService"));
var _IndexProductAttributesService = _interopRequireDefault(require("../../../services/IndexProductAttributesService"));
var _DeleteProductAttributeService = _interopRequireDefault(require("../../../services/DeleteProductAttributeService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductsAttributesController {
  async create(request, response) {
    const data = request.body;
    const {
      productId
    } = request.params;
    const createAttribute = _tsyringe.container.resolve(_CreateProductAttributeService.default);
    const attributes = await createAttribute.execute({
      ...data
    }, productId);
    return response.json((0, _classTransformer.classToClass)(attributes));
  }
  async update(request, response) {
    const data = request.body;
    const {
      productId,
      attributeId
    } = request.params;
    const updateAttribute = _tsyringe.container.resolve(_UpdateProductAttributeService.default);
    const attribute = await updateAttribute.execute(data, productId, attributeId);
    return response.json((0, _classTransformer.classToClass)(attribute));
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const {
      productId
    } = request.params;
    const indexAttributes = _tsyringe.container.resolve(_IndexProductAttributesService.default);
    const attributes = await indexAttributes.execute({
      page: Number(page),
      limit: Number(limit)
    }, productId);
    return response.json((0, _classTransformer.classToClass)(attributes));
  }
  async show(request, response) {
    const {
      slug,
      product_id
    } = request.params;
    const showProduct = _tsyringe.container.resolve(_ShowProductService.default);
    const products = await showProduct.execute(slug, product_id);
    return response.json((0, _classTransformer.classToClass)(products));
  }
  async delete(request, response) {
    const {
      productId,
      attributeId
    } = request.params;
    const attrProduct = _tsyringe.container.resolve(_DeleteProductAttributeService.default);
    await attrProduct.execute(productId, attributeId);
    return response.status(204).send();
  }
}
exports.default = ProductsAttributesController;