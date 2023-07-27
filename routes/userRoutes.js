const express=require('express');

const UserController = require('../controllers/userController');

const validation=require('../middlewares/validation')

const userRoutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      userSignup:
 *        type: object
 *        required:
 *          - userName
 *          - email
 *          - password
 *        properties:
 *          userName:
 *           type: string
 *           description: User's Name
 *          email:
 *           type: string
 *           description: User's email
 *           example: 'durga123@gmail.com'
 *          password:
 *           type: string
 *           description: User's password
 *           example: 'durga123'
 * 
 *         
 */

/**
 * @swagger
 * tags:
 *     name: User
 *     description: The user managing API endpoint
 */



/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Create new user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userSignup'    
 *     responses:
 *       200:
 *         description: Created User successfully
 *       500:
 *         description: Some Server Error
 */

userRoutes.post('/signup',validation.userValidate,UserController.signup)

/**
 * @swagger
 *  components:
 *    schemas:
 *      userLogin:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *           type: string
 *           description: User's email
 *           example: 'durga123@gmail.com'
 *          password:
 *           type: string
 *           description: User's password
 *           example: 'durga123'
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login the user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userLogin'    
 *     responses:
 *       200:
 *         description: Login User successfully
 *       500:
 *         description: Some Server Error
 */

userRoutes.post('/login',UserController.login);

/**
 * @swagger
 *  components:
 *    schemas:
 *      forgetpassword:
 *        type: object
 *        required:
 *          - email
 *        properties:
 *          email:
 *           type: string
 *           description: User's email
 *         
 */


/**
 * @swagger
 * /api/user/forget-password:
 *   post:
 *     summary: Forget the user password and get a resetLink
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/forgetpassword'    
 *     responses:
 *       200:
 *         description: Forget User password successfully
 *       500:
 *         description: Some Server Error
 */

userRoutes.post('/forget-password',validation.FogertPasswordValidate,UserController.forgetPassword);


/**
 * @swagger
 *  components:
 *    schemas:
 *      resetpassword:
 *        type: object
 *        required:
 *          - password
 *        properties:
 *          password:
 *           type: string
 *           description: User's password
 *         
 */


/**
 * @swagger
 * /api/user/reset-password/{resetToken}:
 *   post:
 *     summary: Reset the user password
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: resetToken
 *        schema:
 *           type: string
 *           description: resetToken
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/resetpassword'    
 *     responses:
 *       200:
 *         description: Reset User password successfully
 *       500:
 *         description: Some Server Error
 */


userRoutes.post('/reset-password/:resetToken',UserController.resetPassword);


module.exports=userRoutes

