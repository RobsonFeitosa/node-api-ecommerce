"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
var _ShowProductService = _interopRequireDefault(require("../../../services/ShowProductService"));
var _UpdateProductService = _interopRequireDefault(require("../../../services/UpdateProductService"));
var _DeleteProductService = _interopRequireDefault(require("../../../services/DeleteProductService"));
var _CreateProductDataService = _interopRequireDefault(require("../../../services/CreateProductDataService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductsDataController {
  async create(request, response) {
    const data = request.body;
    const {
      productId
    } = request.params;
    const createproductData = _tsyringe.container.resolve(_CreateProductDataService.default);
    const productData = await createproductData.execute({
      payload: {
        ...data
      },
      productId
    });
    return response.json((0, _classTransformer.classToClass)(productData));
  }
  async update(request, response) {
    const productPayload = request.body;
    const {
      product_id: productId
    } = request.params;
    const updateProduct = _tsyringe.container.resolve(_UpdateProductService.default);
    const product = await updateProduct.execute({
      productId,
      ...productPayload
    });
    return response.json((0, _classTransformer.classToClass)(product));
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
      productId
    } = request.params;
    const delProduct = _tsyringe.container.resolve(_DeleteProductService.default);
    await delProduct.execute(productId);
    return response.status(204).send();
  }
}
exports.default = ProductsDataController;