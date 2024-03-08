"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _upload = _interopRequireDefault(require("../../../../../config/upload"));
var _ArchiveController = _interopRequireDefault(require("../controllers/ArchiveController"));
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const archiveRouter = (0, _express.Router)();
const archiveController = new _ArchiveController.default();
const upload = (0, _multer.default)(_upload.default.multer);
archiveRouter.post('/:originName/:referenceId', upload.array('images'), archiveController.create);
archiveRouter.get('/', archiveController.index);
archiveRouter.delete('/:archiveId', archiveController.delete);
archiveRouter.patch('/:archiveId/reference/:referenceId', archiveController.updateByReference);
archiveRouter.put('/:archiveId', upload.single('image'), archiveController.update);
var _default = exports.default = archiveRouter;