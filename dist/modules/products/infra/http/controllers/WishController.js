"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CreateWishProductService = _interopRequireDefault(require("../../../services/CreateWishProductService"));
var _IndexWishProductService = _interopRequireDefault(require("../../../services/IndexWishProductService"));
var _classTransformer = require("class-transformer");
var _tsyringe = require("tsyringe");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class WishController {
  async create(request, response) {
    const {
      product_id
    } = request.params;
    const {
      id
    } = request.user;
    const createWish = _tsyringe.container.resolve(_CreateWishProductService.default);
    const wish = await createWish.execute({
      product_id,
      user_id: id
    });
    return response.json(wish);
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 999999
    } = request.query;
    const {
      id
    } = request.user;
    const wishProduct = _tsyringe.container.resolve(_IndexWishProductService.default);
    const [wishes, total] = await wishProduct.execute({
      page: Number(page),
      limit: Number(limit)
    }, id);
    return response.json([(0, _classTransformer.classToClass)(wishes), total]);
  }
}
exports.default = WishController;