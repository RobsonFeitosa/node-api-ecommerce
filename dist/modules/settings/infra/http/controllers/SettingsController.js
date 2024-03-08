"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _CreateSettingsService = _interopRequireDefault(require("../../../services/CreateSettingsService"));
var _ShowLocationSettingsService = _interopRequireDefault(require("../../../services/ShowLocationSettingsService"));
var _UpdateSettingsService = _interopRequireDefault(require("../../../services/UpdateSettingsService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SettingsController {
  async create(req, res) {
    const userId = req.user.id;
    const dataSettings = req.body;
    const createSettings = _tsyringe.container.resolve(_CreateSettingsService.default);
    const settings = await createSettings.execute({
      dataSettings,
      userId
    });
    return res.json(settings);
  }
  async show(req, res) {
    const {
      location
    } = req.params;
    const showSettingsLocation = _tsyringe.container.resolve(_ShowLocationSettingsService.default);
    const setting = await showSettingsLocation.execute(location);
    return res.json(setting);
  }
  async update(req, res) {
    const {
      location
    } = req.params;
    const dataSetting = req.body;
    const updateSettingsLocation = _tsyringe.container.resolve(_UpdateSettingsService.default);
    const setting = await updateSettingsLocation.execute({
      location,
      dataSetting
    });
    return res.json(setting);
  }
}
exports.default = SettingsController;