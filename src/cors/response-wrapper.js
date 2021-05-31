// 4XX status code related to client side error
// 5XX status code related to server side error

const createError = require('http-errors');
const { responseObjects } = require('../constant/predefined-http-responses');
const { messages } = require('../constant/messages');

function findHttpResponse(status) {
  const httpStatusCode = `${status}`;
  return responseObjects.find((ro) => ro.code === httpStatusCode) || {
    code: httpStatusCode,
    reason: 'No Such HTTP Status Code',
    description: 'There is no such HTTP status code!',
  };
}

/**
 * Reposnse object.
 * @param {number} status - (required) response status code (200, 400, 500,...)
 * @param {string} message - response message
 * (if it is undefined function fills it with status codes default message)
 * @param {any} data - response custom data
 * @returns wrapped response object
 */
const response = ({ status, message, data }) => ({
  status,
  message,
  data,
});

/**
 * Wraps our reposnses with standard status, message, data structure.
 * @param {number} status - (required) response status code (200, 400, 500,...)
 * @param {string} message - response message
 * (if not exists function puts default message for status code)
 * @param {any} data - response custom data
 * @returns {object} wrapped response object
 * @example
 * wrap({ status: 200 })
 * wrap({ status: 200, message: 'message text' })
 * wrap({ status: 200, message: 'message text', data: {wrapped: object} })
 * wrap({ status: 200, data: {wrapped: object} })
 */
const wrap = ({ status, message, data }) => {
  if (!status) {
    return response({ status: 500, message: `${messages.codeDoesntExist}\n${message}`, data });
  }
  return response({ status, message, data });
};

module.exports = {
  wrap,
};
