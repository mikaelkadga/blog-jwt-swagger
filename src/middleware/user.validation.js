const { body } = require("express-validator");

// const registrationValidationObject = {
//   fullName: {
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
  body("fullName").isString().notEmpty(),
  body("email").isEmail().notEmpty(),
  body("password").isStrongPassword().notEmpty(),
];

module.exports = {
  registrationValidationObject,
};