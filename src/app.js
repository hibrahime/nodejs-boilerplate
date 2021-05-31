const chalk = require('chalk');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./routes/open-api-document.json');

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('./routes')(app);

console.log(chalk.yellow('...test...'));
