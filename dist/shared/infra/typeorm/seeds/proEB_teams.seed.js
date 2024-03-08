"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/User"));
var _Team = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/Team"));
var _teamsData = require("./data/teams-data");
var _Professional = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/Professional"));
var _Product = _interopRequireDefault(require("../../../../modules/products/infra/typeorm/entities/Product"));
var _ProductsTeams = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/ProductsTeams"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TeamsDatabaseSeed {
  async run(factory, connection) {
    const professionals = await connection.getRepository(_Professional.default).createQueryBuilder('pr100_professional').getMany();
    const services = await connection.getRepository(_Product.default).createQueryBuilder('pd100_products').where('pd100_products.type = :type', {
      type: 'service'
    }).getMany();
    const userMaster = await connection.getRepository(_User.default).createQueryBuilder('users').leftJoinAndSelect('users.settings', 'settings').where('settings.level = :level', {
      level: '1'
    }).getMany();
    const servicesIds = services.map(c => c.id);
    // console.log({ servicesIds })
    // console.log({ professionals, services, userMaster })

    const {
      raw: teams
    } = await connection.createQueryBuilder().insert().into(_Team.default).values(_teamsData.teamData.map((team, index) => {
      return {
        ...team,
        user_id: userMaster[0].id
      };
    })).execute();

    // console.log({ teams })

    const teamsProducts = teams.map((team, index) => {
      const newTeamProduct = {
        product_id: '',
        team_id: team.id
      };
      if (index === 0) {
        newTeamProduct.product_id = services[0].id;
      }
      if (index === 1) {
        newTeamProduct.product_id = services[1].id;
      }
      if (index === 2) {
        newTeamProduct.product_id = services[2].id;
      }
      if (index === 3) {
        newTeamProduct.product_id = services[4].id;
      }
      if (index === 4) {
        newTeamProduct.product_id = services[5].id;
      }
      if (index === 5) {
        newTeamProduct.product_id = services[6].id;
      }
      if (index === 6) {
        newTeamProduct.product_id = services[7].id;
      }
      if (index === 7) {
        newTeamProduct.product_id = services[8].id;
      }
      if (index === 8) {
        newTeamProduct.product_id = services[9].id;
      }
      return newTeamProduct;
    });
    // console.log({ teamsProducts })
    const {
      raw: productsTeams
    } = await connection.createQueryBuilder().insert().into(_ProductsTeams.default).values(teamsProducts).execute();
  }
}
exports.default = TeamsDatabaseSeed;