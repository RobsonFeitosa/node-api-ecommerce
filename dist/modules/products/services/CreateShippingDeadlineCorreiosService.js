"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _correiosBrasil = require("correios-brasil");
var _nodeCorreios = _interopRequireDefault(require("node-correios"));
var _dec, _dec2, _dec3, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const correios = new _nodeCorreios.default();
let CreateShippingDeadlineCorreiosService = (_dec = (0, _tsyringe.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = class CreateShippingDeadlineCorreiosService {
  constructor() {}
  async execute(slug, product_id) {
    const codRastreio = ['OU341933668BR', 'LB290784401HK']; // array de códigos de rastreios

    await (0, _correiosBrasil.rastrearEncomendas)(codRastreio).then(response => {
      console.log(response);
    });

    // correios
    //   .calcPreco({
    //     nCdServico: '40010',
    //     sCepOrigem: '80620100',
    //     sCepDestino: '77020104',
    //     nVlPeso: '1',
    //     nCdFormato: '1',
    //     nVlComprimento: '27',
    //     nVlAltura: '8',
    //     nVlLargura: '10',
    //     nVlDiametro: '18',
    //   })
    //   .then((result: any) => {
    //     console.log(result)
    //   })
    //   .catch((error: any) => {
    //     console.log('asdfasdf')
    //     console.log(error)
    //   })
    return '';
  }
}) || _class) || _class) || _class);
var _default = exports.default = CreateShippingDeadlineCorreiosService;