"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _googleapis = require("googleapis");
var _AppError = _interopRequireDefault(require("../../../../../shared/errors/AppError"));
var _dec, _dec2, _dec3, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let GoogleProvider = exports.default = (_dec = (0, _tsyringe.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = class GoogleProvider {
  constructor() {
    this.oauth2Client = void 0;
    this.oauth2Client = new _googleapis.google.auth.OAuth2(process.env.GOOGLE_CLOUD_ID_CLIENT, process.env.GOOGLE_CLOUD_KEY_CLIENT, process.env.GOOGLE_CLOUD_CALLBACK);
  }
  generateURL(scope) {
    const authUrl = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope
    });
    return authUrl;
  }
  async authenticate(code) {
    const {
      tokens
    } = await this.oauth2Client.getToken(code);
    this.oauth2Client.setCredentials(tokens);
    return tokens;
  }
  async destroy(token) {
    await this.oauth2Client.revokeToken(token);
  }
  async getInfo(idToken, clientId) {
    const response = await this.oauth2Client.verifyIdToken({
      idToken,
      audience: clientId
    }).catch(err => {
      if (err) throw new _AppError.default('Credential invalid');
    });
    if (!response) {
      throw new _AppError.default('Confirm credential');
    }
    const payload = response.getPayload();
    if (!payload) {
      throw new _AppError.default('Payload not foud');
    }
    return payload;
  }
}) || _class) || _class) || _class);