"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _IWishRepository = _interopRequireDefault(require("../repositories/IWishRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let IndexWishProductService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('WishRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IWishRepository.default === "undefined" ? Object : _IWishRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class IndexWishProductService {
  constructor(wishRepository) {
    this.wishRepository = wishRepository;
  }
  async execute(options, userId) {
    const wishes = await this.wishRepository.findAndCount(options, userId);
    return wishes;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = IndexWishProductService;