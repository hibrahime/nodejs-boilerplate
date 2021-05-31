const { getUsersQry } = require('../scripts/index');
const { execute } = require('../helper/execute-db-query');

module.exports = {
  getUsers: async ({ query }) => {
    const {
      page, limit,
    } = query;

    const qryParams = [(page - 1) * limit, +limit];
    const { rows: users } = await execute({ query: getUsersQry, parameters: qryParams });

    return users;
  },
};
