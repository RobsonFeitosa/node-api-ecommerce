"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/User"));
var _ordersData = require("./data/orders-data");
var _Order = _interopRequireDefault(require("../../../../modules/orders/infra/typeorm/entities/Order"));
var _OrdersStatus = _interopRequireDefault(require("../../../../modules/orders/infra/typeorm/entities/OrdersStatus"));
var _Address = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/Address"));
var _Product = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/Product"));
var _OrderProduct = _interopRequireDefault(require("../../../../modules/orders/infra/typeorm/entities/OrderProduct"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class OrdersDatabaseSeed {
  async run(factory, connection) {
    const userMaster = await connection.getRepository(_User.default).createQueryBuilder('users').leftJoinAndSelect('users.settings', 'settings').where('settings.level = :level', {
      level: '1'
    }).getMany();
    const products = await connection.getRepository(_Product.default).createQueryBuilder('pd100_products').getMany();
    const address = await connection.getRepository(_Address.default).createQueryBuilder('address').getMany();
    const onlyProduct = products.filter(product => product.type === 'product');
    const onlyService = products.filter(product => product.type === 'service');
    const productsSlice = onlyProduct.slice(0, 4);
    const productsSlice2 = onlyProduct.slice(5, 6);
    const productsSlice3 = onlyProduct.slice(7, 8);
    await connection.createQueryBuilder().insert().into(_Order.default).values(_ordersData.orderData.map((order, index) => {
      // Only products
      if (index === 0) {
        order.products_order = [{
          quantity: 4,
          productId: onlyProduct[0].id
        }];
      }
      if (index === 1) {
        order.products_order = [{
          quantity: 2,
          productId: onlyProduct[1].id
        }];
      }
      if (index === 2) {
        order.products_order = [{
          quantity: 3,
          productId: onlyProduct[2].id
        }];
      }

      // Only services
      if (index === 3) {
        order.products_order = [{
          quantity: 3,
          productId: onlyService[0].id
        }];
      }
      if (index === 4) {
        order.products_order = [{
          quantity: 3,
          productId: onlyService[1].id
        }];
      }
      if (index === 5) {
        order.products_order = [{
          quantity: 3,
          productId: onlyService[2].id
        }];
      }
      if (index === 6) {
        order.products_order = [{
          quantity: 3,
          productId: onlyService[3].id
        }];
      }
      if (index === 7) {
        order.products_order = [{
          quantity: 3,
          productId: onlyService[4].id
        }];
      }
      return {
        ...order,
        user: userMaster[0],
        address: address[0]
      };
    })).execute();
    const orders = await connection.getRepository(_Order.default).createQueryBuilder('or100_orders').getMany();
    await connection.createQueryBuilder().insert().into(_OrderProduct.default).values(productsSlice.map(product => ({
      product,
      quantity: product.product_data?.quantity ?? 0,
      order: orders[0]
    }))).execute();
    await connection.createQueryBuilder().insert().into(_OrderProduct.default).values(productsSlice2.map(product => ({
      product,
      quantity: product.product_data?.quantity ?? 0,
      order: orders[1]
    }))).execute();
    await connection.createQueryBuilder().insert().into(_OrderProduct.default).values(productsSlice3.map(product => ({
      product,
      quantity: product.product_data?.quantity ?? 0,
      order: orders[2]
    }))).execute();
    console.log({
      orders
    });
    // Services orders
    await connection.createQueryBuilder().insert().into(_OrderProduct.default).values([{
      product: onlyService[0],
      quantity: 1,
      order: orders[3]
    }]).execute();
    console.log('entrouu$##');
    await connection.createQueryBuilder().insert().into(_OrderProduct.default).values([{
      product: onlyService[1],
      quantity: 1,
      order: orders[4]
    }]).execute();
    await connection.createQueryBuilder().insert().into(_OrderProduct.default).values([{
      product: onlyService[2],
      quantity: 1,
      order: orders[5]
    }]).execute();
    await connection.createQueryBuilder().insert().into(_OrderProduct.default).values([{
      product: onlyService[3],
      quantity: 1,
      order: orders[6]
    }]).execute();
    await connection.createQueryBuilder().insert().into(_OrderProduct.default).values([{
      product: onlyService[4],
      quantity: 1,
      order: orders[7]
    }]).execute();
    orders.forEach(async (order, index) => {
      if (index < 3) {
        await connection.createQueryBuilder().insert().into(_OrdersStatus.default).values(_ordersData.ordersStatusData.map(orderStatus => {
          return {
            ...orderStatus,
            order_id: order.id
          };
        })).execute();
      }
    });
  }
}
exports.default = OrdersDatabaseSeed;