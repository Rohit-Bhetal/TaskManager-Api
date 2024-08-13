const express = require('express');
const Router = express.Router();
const auth=require('../middleware/auth')
const userController= require('../controller/userController');
const authController=require('../controller/authController');
const upload = require('../middleware/upload');
const errorMessage=require('../utils/errors/message');
//sig In and Login
Router.post('/users',authController.createAccount);
Router.post('/users/login',authController.login);


//Import Controllers
Router.use(auth)

Router.post('/users/logout',authController.logout);
Router.post('/users/logoutAll',authController.logoutAllUser);

//
Router.route('/users/me').get(userController.profile).patch(userController.updateUser).delete(userController.deleteAccount)

Router.route('users/me/avatar').post(upload.single('avatar'),userController.uploadAvatar,errorMessage).delete(userController.deleteAccount)

Router.get('/users/:id/avatar',userController.getAvatar);

module.exports=Router;