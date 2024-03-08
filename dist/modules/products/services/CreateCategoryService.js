"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _ICategoriesRepository = _interopRequireDefault(require("../repositories/ICategoriesRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateCategoryService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CategoriesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICategoriesRepository.default === "undefined" ? Object : _ICategoriesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateCategoryService {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    name,
    parent_id,
    type
  }) {
    let lvlCount = 0;
    if (parent_id !== undefined) {
      const category = await this.categoriesRepository.findById(parent_id);
      if (category && parent_id !== null) {
        lvlCount = Number(category?.level) + 1;
      }
    }
    const categoryResponse = await this.categoriesRepository.create({
      name,
      type,
      parent_id,
      level: lvlCount
    });
    return categoryResponse;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateCategoryService;