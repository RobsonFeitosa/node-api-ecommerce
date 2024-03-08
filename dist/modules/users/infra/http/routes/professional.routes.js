"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ProfessionalController = _interopRequireDefault(require("../controllers/ProfessionalController"));
var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const professionalRouter = (0, _express.Router)();
const crofessionalController = new _ProfessionalController.default();
professionalRouter.use(_ensureAuthenticated.default);
professionalRouter.post('/', crofessionalController.create);
professionalRouter.put('/:professionalId', crofessionalController.update);
professionalRouter.get('/availables', crofessionalController.indexAllAvailable);
professionalRouter.post('/send-invite', crofessionalController.sendActive);
professionalRouter.get('/users-availables', crofessionalController.indexUsersAvailable);
professionalRouter.get('/:professionalId', crofessionalController.show);
professionalRouter.get('/', crofessionalController.index);
professionalRouter.delete('/:professionalId', crofessionalController.delete);
var _default = exports.default = professionalRouter;