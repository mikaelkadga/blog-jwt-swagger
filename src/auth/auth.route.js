const express = require("express")
const authController = require("./auth.controller")
// const { body, validationResult } = require("express-validator");
const { loginValidation } = require("../middleware/auth.validation");
const { validate } = require("../middleware/validation");
const authRouter = express.Router()

authRouter.post("/auth/login", loginValidation, validate, authController.login)

/**
 * @swagger
 * /auth/login:
 *  post:
 *    tags: 
 *      - authorization
 *    summary: API Login
 *    description: Api ini digunakan untuk login
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: contoh@gmail.com
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        description: Login sukses
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                accessToken:
 *                  type: string
 *                  example: aiuwhrp2h3p48uy24184auewfpa8y34pr8ujrp8u2394p812ejuapwf823r89q23y[293u4[23u4ihr9283y4q02783ywfjaidhjfoaw]]
 *      '400':
 *        description: Login gagal
 */

module.exports = authRouter