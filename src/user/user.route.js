const express = require("express");
const tokenVerification = require("../middleware/token.verification");
const {registrationValidationObject} = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");
const userController = require("./user.controller");
const userRouter = express.Router();


//registration page
userRouter.post("/user/registration", registrationValidationObject,
                validate, userController.createUser)

/**
 * @swagger
 * /user/registration:
 *  post:
 *    tags: 
 *      - user
 *    summary: API Create User
 *    description: Api ini digunakan untuk create user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: Contoh Nama
 *              email:
 *                type: string
 *                example: contoh@gmail.com
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        description: Create User Berhasil sukses
 *      '500':
 *        description: Create user failed!
 */

//edit user (private)
userRouter.put("/user/:userId", tokenVerification, userController.editUser)

/**
 * @swagger
 * /user/{userId}:
 *  put:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - user
 *    summary: API Edit User
 *    parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: Nama lengkap
 *              email:
 *                type: string
 *                example: contoh@gmail.com
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        description: Edit data user sukses
 *      '500':
 *        description: Edit data user failed!
 */

module.exports = userRouter