const router = require('express').Router();
const userController = require('./userController');
const validation = require('../../validation/userValidation');

module.exports = (app) => {
  router.route('/users')
    .get(
      validation.getUsers(),
      userController.getUsers,
    );

  app.use(
    router,
  );
};
