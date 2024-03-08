"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateCategoryService = _interopRequireDefault(require("../../../services/CreateCategoryService"));
var _UpdateCategoryService = _interopRequireDefault(require("../../../services/UpdateCategoryService"));
var _DeleteCategoryService = _interopRequireDefault(require("../../../services/DeleteCategoryService"));
var _IndexCategoryService = _interopRequireDefault(require("../../../services/IndexCategoryService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CategoriesController {
  async create(request, response) {
    const data = request.body;
    const createCategory = _tsyringe.container.resolve(_CreateCategoryService.default);
    const category = await createCategory.execute(data);
    return response.json(category);
  }
  async update(request, response) {
    const data = request.body;
    const {
      id
    } = request.params;
    const updateCategory = _tsyringe.container.resolve(_UpdateCategoryService.default);
    const categoryCreated = await updateCategory.execute({
      category_id: id,
      ...data
    });
    return response.json(categoryCreated);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const deleteCategory = _tsyringe.container.resolve(_DeleteCategoryService.default);
    await deleteCategory.execute(id);
    return response.status(204).send();
  }
  async index(request, response) {
    const {
      page = 1,
      limit = 99999
    } = request.query;
    const {
      type
    } = request.query;
    const indexCategory = _tsyringe.container.resolve(_IndexCategoryService.default);
    const category = await indexCategory.execute({
      page: Number(page),
      limit: Number(limit)
    }, type ? String(type) : '');
    return response.json(category);
  }
}
exports.default = CategoriesController;