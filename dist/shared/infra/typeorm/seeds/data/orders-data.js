"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordersStatusData = exports.orderData = void 0;
const orderData = exports.orderData = [{
  tracking_code: 'PC123456789BR',
  coupon_applied: JSON.stringify({
    coupon: '4DK5S7P',
    discount: 15
  }),
  freight: JSON.stringify({
    name: 'PAC',
    value: 55
  }),
  products_order: [],
  payment_method: 'pix',
  cod_order: '1DKQJ7P',
  type_product: 'product',
  amount: 8500,
  user: {}
}, {
  tracking_code: 'PC123456789BR',
  freight: JSON.stringify({
    name: 'PAC',
    value: 22.5
  }),
  products_order: [],
  payment_method: 'pix',
  cod_order: 'GA484K2',
  type_product: 'product',
  amount: 1200,
  user: {}
}, {
  tracking_code: 'PC123456789BR',
  freight: JSON.stringify({
    name: 'PAC',
    value: 35.5
  }),
  products_order: [],
  payment_method: 'pix',
  type_product: 'product',
  cod_order: 'OL22LKO',
  amount: 1400,
  user: {}
}, {
  products_order: [],
  payment_method: 'pix',
  type_product: 'service',
  cod_order: 'JAEFEF',
  amount: 132,
  user: {}
}, {
  products_order: [],
  payment_method: 'pix',
  type_product: 'service',
  cod_order: 'GAEFAF',
  amount: 132,
  user: {}
}, {
  products_order: [],
  payment_method: 'pix',
  type_product: 'service',
  cod_order: 'OL22LKO',
  amount: 132,
  user: {}
}, {
  products_order: [],
  payment_method: 'pix',
  type_product: 'service',
  cod_order: 'KAEVVE',
  amount: 132,
  user: {}
}, {
  products_order: [],
  payment_method: 'pix',
  type_product: 'service',
  cod_order: '74AVAVE',
  amount: 132,
  user: {}
}];
const ordersStatusData = exports.ordersStatusData = [{
  name: 'awaiting_payment',
  order_id: ''
}, {
  name: 'awaiting_shipment',
  order_id: ''
}, {
  name: 'awaiting_pickup',
  order_id: ''
}, {
  name: 'shiped',
  order_id: ''
}, {
  name: 'completed',
  order_id: ''
}];