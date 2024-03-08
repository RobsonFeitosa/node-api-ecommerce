"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _IStorageProvider = _interopRequireDefault(require("../../../shared/container/providers/StorageProvider/models/IStorageProvider"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IUserSettingsRepository = _interopRequireDefault(require("../repositories/IUserSettingsRepository"));
var _classTransformer = require("class-transformer");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let UpdateUserAvatarService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UserSettingsRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('StorageProvider')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IUserSettingsRepository.default === "undefined" ? Object : _IUserSettingsRepository.default, typeof _IStorageProvider.default === "undefined" ? Object : _IStorageProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class UpdateUserAvatarService {
  constructor(usersRepository, userSettingsRepository, storageProvider) {
    this.usersRepository = usersRepository;
    this.userSettingsRepository = userSettingsRepository;
    this.storageProvider = storageProvider;
  }
  async execute({
    user_id,
    avatarFilename
  }) {
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new _AppError.default('Only authenticated users can change avatar.', 401);
    }
    const settings = await this.userSettingsRepository.findById(user.settings_id);
    if (!settings) {
      throw new _AppError.default('Only authenticated users can change avatar.', 401);
    }
    if (settings.avatar) {
      await this.storageProvider.deleteFile(settings.avatar);
    }
    const filename = await this.storageProvider.saveFile(avatarFilename);
    settings.avatar = filename;
    await this.usersRepository.save(user);
    user.settings = (0, _classTransformer.classToClass)(settings);
    return user;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = UpdateUserAvatarService;