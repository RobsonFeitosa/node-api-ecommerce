"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IProductsRepository = _interopRequireDefault(require("../../products/repositories/IProductsRepository"));
var _IOrdersRepository = _interopRequireDefault(require("../repositories/IOrdersRepository"));
var _IUsersRepository = _interopRequireDefault(require("../../users/repositories/IUsersRepository"));
var _IHashProvider = _interopRequireDefault(require("../../users/providers/HashProvider/models/IHashProvider"));
var _IAddressRepository = _interopRequireDefault(require("../../users/repositories/IAddressRepository"));
var _IOrderProductRepository = _interopRequireDefault(require("../repositories/IOrderProductRepository"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// type StatusPayment =
//   | 'pending'
//   | 'awaiting_payment'
//   | 'awaiting_fulfillment'
//   | 'awaiting_shipment'
//   | 'awaiting_pickup'
//   | 'partially_shipped'
//   | 'completed'
//   | 'shiped'
//   | 'cancelled'
//   | 'declined'
//   | 'refunded'
//   | 'disputed'
let CreateOrderService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('OrdersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('AddressRepository')(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 3);
}, _dec6 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 4);
}, _dec7 = function (target, key) {
  return (0, _tsyringe.inject)('OrderProductRepository')(target, undefined, 5);
}, _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", [typeof _IOrdersRepository.default === "undefined" ? Object : _IOrdersRepository.default, typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default, typeof _IAddressRepository.default === "undefined" ? Object : _IAddressRepository.default, typeof _IHashProvider.default === "undefined" ? Object : _IHashProvider.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IOrderProductRepository.default === "undefined" ? Object : _IOrderProductRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = class CreateOrderService {
  constructor(ordersRepository, productsRepository, addressRepository, hashProvider, usersRepository, orderProductRepository) {
    this.ordersRepository = ordersRepository;
    this.productsRepository = productsRepository;
    this.addressRepository = addressRepository;
    this.hashProvider = hashProvider;
    this.usersRepository = usersRepository;
    this.orderProductRepository = orderProductRepository;
  }
  async execute({
    user_id,
    payload
  }) {
    const {
      products_order,
      address_id,
      ...rest
    } = payload;
    const userExist = await this.usersRepository.findById(user_id);
    if (!userExist) {
      throw new _AppError.default('This user does not exists');
    }
    console.log({
      products_order
    });
    const productIds = products_order.map(po => po.productId);
    const productsData = await this.productsRepository.findAndCount({
      limit: 99999,
      page: 1
    }, {
      productIds: JSON.stringify(productIds)
    }, {
      alphabeticalDESC: true
    });

    // TODO: Pegou todos os produtos para fazer a deducao
    const [products] = productsData;
    console.log({
      products
    });

    // const updatedQuantities: IUpdateProductsQuantityDTO[] = []

    // const updatedProducts = productsFind.map((findProduct) => {
    //   const orderProduct = orders_products.find(
    //     (order_product) => order_product.id === findProduct.id,
    //   )

    //   if (orderProduct) {
    //     if (findProduct.type === 'product') {
    //       // TODO: Verificar quantidade em stoque para simples e multiplos produtos
    //       // if (findProduct.product_data.quantity < orderProduct.quantity) {
    //       //   throw new AppError('Hast not quantity available in stock')
    //       // }
    //       // TODO: Reduzir quantidade quando for simples ou multiplos produtos
    //       // if (orderProduct.id) {
    //       //   updatedQuantities.push({
    //       //     id: orderProduct.id,
    //       //     quantity:
    //       //       findProduct.product_data.quantity - orderProduct.quantity,
    //       //   })
    //       // }
    //       // return productsFind
    //     }
    //   }

    //   return findProduct
    // })

    const codOrder = await this.builderHash();
    // await this.productsRepository.updateQuantity(updatedQuantities)

    if (address_id) {
      const addressExist = await this.addressRepository.findById(address_id);
      if (!addressExist) {
        throw new _AppError.default('Address not found');
      }
    }
    const order = await this.ordersRepository.create({
      ...rest,
      user: userExist,
      address_id,
      cod_order: codOrder
    });
    products.forEach(async (product, index) => {
      await this.orderProductRepository.create({
        order,
        product,
        quantity: products_order[index].quantity
      });
    });
    return order;
  }
  async builderHash() {
    const hashCode = await this.hashProvider.generateHash(String(Math.random()));
    const codeValue = hashCode.slice(-8, -1).toLocaleUpperCase();
    return codeValue;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateOrderService;