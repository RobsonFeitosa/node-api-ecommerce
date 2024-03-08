"use strict";

var _typeormSeeding = require("typeorm-seeding");
var _Product = _interopRequireDefault(require("../entities/Product"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _typeormSeeding.define)(_Product.default, () => {
  const product = new _Product.default();
  product.name = 'teste';
  product.price = 100;
  product.old_price = 200;
  product.cod_product = '1729dc75-cfea-4fd8-8170-53af59e1d3c6';
  product.emphasis = false;
  product.type = 'product';
  product.description = 'teste';
  return product;
});