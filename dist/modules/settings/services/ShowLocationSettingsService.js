"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _ISettingsRepository = _interopRequireDefault(require("../repositories/ISettingsRepository"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let CreateSettingsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('SettingsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISettingsRepository.default === "undefined" ? Object : _ISettingsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateSettingsService {
  constructor(settingsRepository) {
    this.settingsRepository = settingsRepository;
  }
  async execute(location) {
    const setting = await this.settingsRepository.findByLocation(location);
    if (!setting) {
      throw new _AppError.default('Setting does not found');
    }
    return setting;
  }
}) || _class) || _class) || _class) || _class);
var _default = exports.default = CreateSettingsService;