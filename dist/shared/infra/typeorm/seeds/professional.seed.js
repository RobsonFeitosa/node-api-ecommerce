"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/User"));
var _professionalData = require("./data/professional-data");
var _UserSettings = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/UserSettings"));
var _Professional = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/Professional"));
var _BCryptHashProvider = _interopRequireDefault(require("../../../../modules/users/providers/HashProvider/implementations/BCryptHashProvider"));
var _tsyringe = require("tsyringe");
var _Team = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/Team"));
var _TimeIntervals = _interopRequireDefault(require("../../../../modules/users/infra/typeorm/entities/TimeIntervals"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const hashProvider = _tsyringe.container.resolve(_BCryptHashProvider.default);
function getTeamId(teams, name) {
  const team = teams.find(t => name === t.name);
  if (!team) {
    return '';
  }
  return team.id;
}
class ProfessionalDatabaseSeed {
  async run(factory, connection) {
    const {
      raw: settings
    } = await connection.createQueryBuilder().insert().into(_UserSettings.default).values(_professionalData.settingsProfessionalData).execute();
    const hashedPassword = await hashProvider.generateHash('123123');
    const {
      raw: users
    } = await connection.createQueryBuilder().insert().into(_User.default).values(_professionalData.usersProfessionalData.map((u, index) => ({
      ...u,
      settings_id: settings[index].id,
      password: hashedPassword
    }))).execute();
    const teams = await connection.getRepository(_Team.default).createQueryBuilder('te100_team').getMany();
    const {
      raw: professionais
    } = await connection.createQueryBuilder().insert().into(_Professional.default).values(_professionalData.professionalData.map((professional, index) => {
      if ([0, 1].includes(index)) {
        professional.team_id = getTeamId(teams, 'Mecânicos');
      }
      if ([2, 3].includes(index)) {
        professional.team_id = getTeamId(teams, 'Cabelereiros');
      }
      if ([4].includes(index)) {
        professional.team_id = getTeamId(teams, 'Técnicos em informática');
      }
      if ([5].includes(index)) {
        professional.team_id = getTeamId(teams, 'Técnicos em seguranća');
      }
      if ([6].includes(index)) {
        professional.team_id = getTeamId(teams, 'Maquiadoras');
      }
      if ([7].includes(index)) {
        professional.team_id = getTeamId(teams, 'Dentistas');
      }
      if ([8, 9].includes(index)) {
        professional.team_id = getTeamId(teams, 'Jardineiros');
      }
      if ([10].includes(index)) {
        professional.team_id = getTeamId(teams, 'Vendedores');
      }
      return {
        ...professional,
        user_id: users[index].id
      };
    })).execute();
    for (const professional of professionais) {
      await connection.createQueryBuilder().insert().into(_TimeIntervals.default).values(_professionalData.timeIntervals.map(interval => ({
        ...interval,
        professional_id: professional.id
      }))).execute();
    }
  }
}
exports.default = ProfessionalDatabaseSeed;