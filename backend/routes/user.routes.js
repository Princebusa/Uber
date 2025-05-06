const express = require("express");
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')
const middelware = require('../middleware/auth.middleware')


router.post('/register', [
    body('email').isEmail().withMessage('envalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('firstname atlist 3 character long'),
    body('password').isLength({ min: 5 }).withMessage('password atlist 5 character long')
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('envalid email'),
    body('password').isLength({min: 5}).withMessage('password atlist 5 character long')
],
  userController.loginUser
)

router.get('/profile',middelware.authUser, userController.getUserprofile)
router.get('/logout', middelware.authUser, userController.logoutUser)

module.exports = router