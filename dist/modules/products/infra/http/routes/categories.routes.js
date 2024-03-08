"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _CategoriesController = _interopRequireDefault(require("../controllers/CategoriesController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const categoriesRouter = (0, _express.Router)();
const categoriesController = new _CategoriesController.default();

// categoriesRouter.use(ensureAuthenticated)

categoriesRouter.post('/', categoriesController.create);
categoriesRouter.put('/:id', categoriesController.update);
categoriesRouter.delete('/:id', categoriesController.delete);
categoriesRouter.get('/', categoriesController.index);
var _default = exports.default = categoriesRouter;