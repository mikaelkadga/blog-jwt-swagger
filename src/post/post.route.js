const express = require('express');
const tokenVerification = require('../middleware/token.verification');
const {createPostValidationObject} = require("../middleware/post.validation");
const { validate } = require("../middleware/validation");
const postController = require('./post.controller');
const postRouter = express.Router();

//get all post
postRouter.get('/posts', postController.getAllPost);

/**
 * @swagger
 * /posts:
 *  get:
 *    tags: 
 *      - post
 *    summary: API Get All Posts
 *    description: Api ini digunakan untuk menampilkan semua post
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                  type: object
 *                  properties:
 *                      title:
 *                        type: string
 *                        example: Judul
 *                      body:
 *                        type: string
 *                        example: blablablablablablabla
 *                      image:
 *                        type: string
 *                        example: image.jpg
 *      '500':
 *        description: 
 */

//get posts from specific writer
postRouter.get('/post', tokenVerification, postController.getWriterPost);

/**
 * @swagger
 * /post:
 *  get:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - post
 *    summary: API Get Post From Specific User
 *    parameters:
 *      - in: query
 *        name: writer
 *        required: true
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  type: object
 *                  properties:
 *                    title:
 *                      type: string
 *                      example: Judul
 *                    body:
 *                      type: string
 *                      example: blablablablablablabla
 *                    image:
 *                      type: string
 *                      example: image.jpg
 *      '500':
 *        description: 
 */

//create post
postRouter.post('/post', tokenVerification, createPostValidationObject,
                validate, postController.createPost);

/**
 * @swagger
 * /post:
 *  post:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - post
 *    summary: API Create Post
 *    parameters:
 *      - in: query
 *        name: writer
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                example: Judul
 *              body:
 *                type: string
 *                example: blalbalbalbalba blalbablabla
 *              image:
 *                type: string
 *                example: gambar.jpg
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: Judul
 *                body:
 *                  type: string
 *                  example: blablablablablablabla
 *                image:
 *                  type: string
 *                  example: image.jpg
 *      '500':
 *        description: 
 */

//edit post
postRouter.put('/post/:postId', tokenVerification, createPostValidationObject,
                validate, postController.editPost)

/**
 * @swagger
 * /post/{postId}:
 *  put:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - post
 *    summary: API Edit Post
 *    parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *      - in: query
 *        name: writer
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
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: Judul
 *                body:
 *                  type: string
 *                  example: blablablablablablabla
 *                image:
 *                  type: string
 *                  example: image.jpg
 *      '500':
 *        description: 
 */

//get post detail
postRouter.get('/post/:postId', postController.detailPost);

/**
 * @swagger
 * /post/{postId}:
 *  get:
 *    tags:
 *      - post
 *    summary: API Get Detail Post
 *    parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: Judul
 *                body:
 *                  type: string
 *                  example: blablablablablablabla
 *                image:
 *                  type: string
 *                  example: image.jpg
 *      '500':
 *        description: 
 */


//delete post
postRouter.delete('/post/:postId', tokenVerification, postController.deletePost);

/**
 * @swagger
 * /post/{postId}:
 *  delete:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - post
 *    summary: API Delete Post
 *    parameters:
 *      - in: query
 *        name: writer
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
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                postId:
 *                  type: integer
 *                  example: 1
 *                status:
 *                  type: string
 *                  example: deleted
 *      '500':
 *        description: 
 */



module.exports = postRouter;