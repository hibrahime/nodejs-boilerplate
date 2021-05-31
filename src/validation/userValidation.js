const { query } = require('express-validator');

module.exports = {
  getUsers: () => [
    query('limit', 'Enter a valid "limit" parameter!').isInt({ min: 0, max: 2000 }),
    query('page', 'Enter a valid "page" parameter!').isInt({ min: 1, max: 2000 }),
  ],
};
