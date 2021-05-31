const { validationResult } = require('express-validator');
const userServices = require('../../services/userServices');
const { wrap } = require('../../cors/response-wrapper');
const { messages } = require('../../constant/messages');

module.exports = {
  getUsers: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(wrap({ status: 400, message: messages.getUsers400 }));
    }
    try {
      const result = await userServices.getUsers(req);
      res.status(200).send(wrap({ data: result, status: 200, message: messages.getUsers200 }));
    } catch (error) {
      console.error(error);
      res.status(500).send(wrap({ status: 500 }));
    }
  },
};
