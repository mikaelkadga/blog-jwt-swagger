const { body } = require("express-validator");

// const registrationValidationObject = {
//   fullname: {
//     in: ["body"],
//     isString: true,
//   },
//   email: {
//     in: ["body"],
//     isEmail: true,
//   },
//   password: {
//     in: ["body"],
//     isStrongPassword: true,
//   },
// };

const registrationValidationObject = [
  body("fullname").isString().notEmpty(),
  body("email").isEmail().notEmpty(),
  body("password").isStrongPassword().notEmpty(),
];

module.exports = {
  registrationValidationObject,
};