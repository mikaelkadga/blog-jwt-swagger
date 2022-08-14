const { body } = require("express-validator");

const createPostValidationObject = [
    body("title").isString().notEmpty(),
    body("body").isString().notEmpty(),
];

module.exports = {
  createPostValidationObject
};