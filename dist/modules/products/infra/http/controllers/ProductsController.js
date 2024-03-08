"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
var _CreateProductService = _interopRequireDefault(require("../../../services/CreateProductService"));
var _IndexProductsService = _interopRequireDefault(require("../../../services/IndexProductsService"));
var _ShowProductService = _interopRequireDefault(require("../../../services/ShowProductService"));
var _UpdateProductService = _interopRequireDefault(require("../../../services/UpdateProductService"));
var _DeleteProductService = _interopRequireDefault(require("../../../services/DeleteProductService"));
var _UpdateImagePrimary = _interopRequireDefault(require("../../../services/UpdateImagePrimary"));
var _UpdateRemoveTimeDiscountOfProductService = _interopRequireDefault(require("../../../services/UpdateRemoveTimeDiscountOfProductService"));
var _ShowEmphasisProductService = _interopRequireDefault(require("../../../services/ShowEmphasisProductService"));
var _IndexTimeDiscountAvailableProduct = _interopRequireDefault(require("../../../services/IndexTimeDiscountAvailableProduct"));
var _CreateShippingDeadlineCorreiosService = _interopRequireDefault(require("../../../services/CreateShippingDeadlineCorreiosService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductsController {
  async create(request, response) {
    const data = request.body;
    const createProoduct = _tsyringe.container.resolve(_CreateProductService.default);
    const product = await createProoduct.execute(data);
    return response.json((0, _classTransformer.classToClass)(product));
  }
  async update(request, response) {
    const data = request.body;
    const {
      productId
    } = request.params;
    const updateProduct = _tsyringe.container.resolve(_UpdateProductService.default);
    const product = await updateProduct.execute({
      productId,
      ...data
    });
    return response.json((0, _classTransformer.classToClass)(product));
  }
  async updateRemoveTimeDiscount(request, response) {
    const {
      productId
    } = request.params;
    const updatService = _tsyringe.container.resolve(_UpdateRemoveTimeDiscountOfProductService.default);
    await updatService.execute(productId);
    return response.status(204).send();
  }
  async updateImagePrimary(request, response) {
    const {
      productId
    } = request.params;
    const file = request.file;
    const updateImage = _tsyringe.container.resolve(_UpdateImagePrimary.default);
    const archive = await updateImage.execute(productId, file);
    return response.json((0, _classTransformer.classToClass)(archive));
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999,
      userId,
      onlyDiscount,
      type,
      timeDiscountPriory,
      name,
      quantity,
      weight,
      priceMin,
      priceMax,
      lowPrice,
      highPrice,
      old,
      alphabeticalASC,
      alphabeticalDESC,
      categoryId,
      productIds
    } = request.query;
    const indexProducts = _tsyringe.container.resolve(_IndexProductsService.default);
    const products = await indexProducts.execute({
      page: Number(page),
      limit: Number(limit)
    }, {
      ...(userId && {
        userId: String(userId)
      }),
      ...(onlyDiscount && {
        onlyDiscount: Boolean(onlyDiscount)
      }),
      ...(type && {
        type: type
      }),
      ...(name && {
        name: String(name)
      }),
      ...(quantity && {
        quantity: Number(quantity)
      }),
      ...(weight && {
        weight: Number(weight)
      }),
      ...(priceMin && {
        priceMin: Number(priceMin)
      }),
      ...(priceMax && {
        priceMax: Number(priceMax)
      }),
      ...(productIds && {
        productIds: String(productIds)
      }),
      ...(categoryId && {
        categoryId: String(categoryId)
      })
    }, {
      ...(timeDiscountPriory && {
        timeDiscountPriory: Boolean(timeDiscountPriory)
      }),
      ...(lowPrice && {
        lowPrice: Boolean(lowPrice)
      }),
      ...(highPrice && {
        highPrice: Boolean(highPrice)
      }),
      ...(old && {
        old: Boolean(old)
      }),
      ...(alphabeticalDESC && {
        alphabeticalDESC: Boolean(alphabeticalDESC)
      }),
      ...(alphabeticalASC && {
        alphabeticalASC: Boolean(alphabeticalASC)
      })
    });
    return response.json((0, _classTransformer.classToClass)(products));
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
  async createShippingDeadline(request, response) {
    const {
      slug,
      product_id
    } = request.params;
    const showProduct = _tsyringe.container.resolve(_CreateShippingDeadlineCorreiosService.default);
    const products = await showProduct.execute(slug, product_id);
    return response.json((0, _classTransformer.classToClass)(products));
  }
  async showEmphasis(request, response) {
    const showProduct = _tsyringe.container.resolve(_ShowEmphasisProductService.default);
    const product = await showProduct.execute();
    return response.json((0, _classTransformer.classToClass)(product));
  }
  async indexTimeDiscountsOptions(request, response) {
    const showProduct = _tsyringe.container.resolve(_IndexTimeDiscountAvailableProduct.default);
    const product = await showProduct.execute();
    return response.json((0, _classTransformer.classToClass)(product));
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
exports.default = ProductsController;