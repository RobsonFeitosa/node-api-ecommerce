"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tsyringe = require("tsyringe");
var _fs = _interopRequireDefault(require("fs"));
var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));
var _path = _interopRequireDefault(require("path"));
var _IUserTransactionsRepository = _interopRequireDefault(require("../repositories/IUserTransactionsRepository"));
var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));
var _IMailProvider = _interopRequireDefault(require("../../../shared/container/providers/MailProvider/models/IMailProvider"));
var _formatValue = _interopRequireDefault(require("../../utils/formatValue"));
var _handlebars = _interopRequireDefault(require("handlebars"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let TesteService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserTransactionsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('MailProvider')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUserTransactionsRepository.default === "undefined" ? Object : _IUserTransactionsRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IMailProvider.default === "undefined" ? Object : _IMailProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class TesteService {
  constructor(userTransactionsRepository, usersRepository, mailProvider) {
    this.userTransactionsRepository = userTransactionsRepository;
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }
  async execute({
    transactionId
  }) {
    const transaction = await this.userTransactionsRepository.findById(transactionId);
    if (!transaction) throw new _AppError.default('Transaction not found');
    transaction.status = 'paid';
    await this.sendEmail(transaction);
    await this.userTransactionsRepository.save(transaction);
    return transaction;
  }
  async sendEmail(transaction) {
    const user = await this.usersRepository.findById(transaction.user_id);
    if (!user) throw new _AppError.default('User does not exists.');
    const template = _path.default.resolve(__dirname, '..', 'views', 'receipt.hbs');
    const idOrder = transaction.order_id.substr(0, 11);
    this.createPDF({
      name: user.name,
      total: (0, _formatValue.default)(transaction.amount / 100),
      idOrder,
      discount: 0,
      netTotal: (0, _formatValue.default)(transaction.amount / 100)
    }, template);

    // await this.mailProvider.sendMail({
    //   to: {
    //     name: user.name,
    //     email: user.email,
    //   },
    //   subject: `[LemonadeTechnologies] Recibo - ${idOrder}`,
    //   templateData: {
    //     file: template,
    //     variables: {
    //       name: user.name,
    //       total: formatValue(transaction.amount / 100),
    //       idOrder,
    //       discount: 0,
    //       netTotal: formatValue(transaction.amount / 100),
    //     },
    //   },
    // });
  }
  async createPDF(data, templateUrl) {
    const templateHtml = _fs.default.readFileSync(_path.default.join(process.cwd(), './src/modules/users/views/template.html'), 'utf8');
    const template = _handlebars.default.compile(templateHtml);
    const html = template(data);
    const milis = new Date();
    const milis2 = milis.getTime();
    const pdfPath = _path.default.join('pdf', `${data.name}-${milis2}.pdf`);
    const options = {
      width: '1230px',
      headerTemplate: '<p></p>',
      footerTemplate: '<p></p>',
      displayHeaderFooter: false,
      margin: {
        top: '10px',
        bottom: '30px'
      },
      printBackground: true,
      path: pdfPath
    };

    // const browser = await puppeteer.launch({
    //   args: ['--no-sandbox'],
    //   headless: true
    // });
    // const browser = await puppeteer.launch({
    //   args: ['--no-sandbox'],
    //   headless: true
    // });

    // const page = await browser.newPage();

    // await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    //   waitUntil: 'networkidle0'
    // });

    // await page.pdf(options);
    // await browse

    // const page = await browser.newPage();

    // await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    //   waitUntil: 'networkidle0'
    // });

    // await page.pdf(options);
    // await browser.close();
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = exports.default = TesteService;