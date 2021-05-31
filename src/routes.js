const glob = require('glob');

module.exports = (app) => {
  glob(`${__dirname}/routes/**/*Routes.js`, {}, (err, routeFiles) => {
    if (err) throw err;
    routeFiles.forEach((file) => require(file)(app));
  });
};
