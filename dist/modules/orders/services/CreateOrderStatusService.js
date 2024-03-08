"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _path = _interopRequireDefault(require("path"));
var _IOrderStatusRepository = _interopRequireDefault(require("../repositories/IOrderStatusRepository"));
var _IOrdersRepository = _interopRequireDefault(require("../repositories/IOrdersRepository"));
var _IMailProvider = _interopRequireDefault(require("../../../shared/container/providers/MailProvider/models/IMailProvider"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateOrderStatusService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('OrderStatusRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('OrdersRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IOrderStatusRepository.default === "undefined" ? Object : _IOrderStatusRepository.default, typeof _IOrdersRepository.default === "undefined" ? Object : _IOrdersRepository.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CreateOrderStatusService {
  constructor(orderStatusRepository, ordersRepository, mailProvider) {
    this.orderStatusRepository = orderStatusRepository;
    this.ordersRepository = ordersRepository;
    this.mailProvider = mailProvider;
  }
  async execute({
    payload
  }) {
    const order = await this.ordersRepository.findById(payload.order_id);
    if (!order) {
      throw new _AppError.default('Order not found');
    }
    const orderStatus = await this.orderStatusRepository.create({
      ...payload,
      order
    });
    this.sendMailStatus(order, orderStatus.name);
    return orderStatus;
  }
  async sendMailStatus(order, status) {
    const activedTemplate = _path.default.resolve(__dirname, '..', 'views', `${status}.hbs`);
    await this.mailProvider.sendMail({
      to: {
        name: order.user.name,
        email: order.user.email
      },
      subject: `Pedido #${order.cod_order} - [empresa]`,
      templateData: {
        file: activedTemplate,
        variables: {
          name: `user.name`
        }
      }
    });
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateOrderStatusService;