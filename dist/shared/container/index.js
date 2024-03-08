"use strict";

var _tsyringe = require("tsyringe");
require("../../modules/users/providers");
require("./providers");
var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));
var _UserSettingsRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UserSettingsRepository"));
var _UserTransactionsRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UserTransactionsRepository"));
var _OrdersRepository = _interopRequireDefault(require("../../modules/orders/infra/typeorm/repositories/OrdersRepository"));
var _AddressRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/AddressRepository"));
var _CommentRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/CommentRepository"));
var _CreditCardRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/CreditCardRepository"));
var _UserTokensRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UserTokensRepository"));
var _SettingsRepository = _interopRequireDefault(require("../../modules/settings/infra/typeorm/repositories/SettingsRepository"));
var _ProductsRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/ProductsRepository"));
var _CategoriesRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/CategoriesRepository"));
var _WishRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/WishRepository"));
var _CouponRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/CouponRepository"));
var _OrderStatusRepository = _interopRequireDefault(require("../../modules/orders/infra/typeorm/repositories/OrderStatusRepository"));
var _ProductDataRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/ProductDataRepository"));
var _ProductAttributesRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/ProductAttributesRepository"));
var _ProductVariationsRespository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/ProductVariationsRespository"));
var _ArchiveRepository = _interopRequireDefault(require("../../modules/archives/infra/typeorm/repositories/ArchiveRepository"));
var _ProductProviderRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/ProductProviderRepository"));
var _TimeDiscountRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/TimeDiscountRepository"));
var _TeamRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/TeamRepository"));
var _ProfessionalRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/ProfessionalRepository"));
var _TimeIntervalsRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/TimeIntervalsRepository"));
var _ScheduleRepository = _interopRequireDefault(require("../../modules/schedule/infra/typeorm/repositories/ScheduleRepository"));
var _OrderProductRepository = _interopRequireDefault(require("../../modules/orders/infra/typeorm/repositories/OrderProductRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);
_tsyringe.container.registerSingleton('UserSettingsRepository', _UserSettingsRepository.default);
_tsyringe.container.registerSingleton('UserTransactionsRepository', _UserTransactionsRepository.default);
_tsyringe.container.registerSingleton('CommentRepository', _CommentRepository.default);
_tsyringe.container.registerSingleton('OrdersRepository', _OrdersRepository.default);
_tsyringe.container.registerSingleton('AddressRepository', _AddressRepository.default);
_tsyringe.container.registerSingleton('CreditCardRepository', _CreditCardRepository.default);
_tsyringe.container.registerSingleton('UserTokensRepository', _UserTokensRepository.default);
_tsyringe.container.registerSingleton('SettingsRepository', _SettingsRepository.default);
_tsyringe.container.registerSingleton('ProductsRepository', _ProductsRepository.default);
_tsyringe.container.registerSingleton('CategoriesRepository', _CategoriesRepository.default);
_tsyringe.container.registerSingleton('WishRepository', _WishRepository.default);
_tsyringe.container.registerSingleton('CouponRepository', _CouponRepository.default);
_tsyringe.container.registerSingleton('OrderStatusRepository', _OrderStatusRepository.default);
_tsyringe.container.registerSingleton('ProductDataRepository', _ProductDataRepository.default);
_tsyringe.container.registerSingleton('ProductAttributesRepository', _ProductAttributesRepository.default);
_tsyringe.container.registerSingleton('ProductVariationsRespository', _ProductVariationsRespository.default);
_tsyringe.container.registerSingleton('ArchiveRepository', _ArchiveRepository.default);
_tsyringe.container.registerSingleton('ProductProviderRepository', _ProductProviderRepository.default);
_tsyringe.container.registerSingleton('TimeDiscountRepository', _TimeDiscountRepository.default);
_tsyringe.container.registerSingleton('ProfessionalRepository', _ProfessionalRepository.default);
_tsyringe.container.registerSingleton('TeamRepository', _TeamRepository.default);
_tsyringe.container.registerSingleton('TimeIntervalsRepository', _TimeIntervalsRepository.default);
_tsyringe.container.registerSingleton('ScheduleRepository', _ScheduleRepository.default);
_tsyringe.container.registerSingleton('OrderProductRepository', _OrderProductRepository.default);