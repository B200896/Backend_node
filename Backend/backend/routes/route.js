const express = require('express')
const router=express.Router();
const userController=require('../controller/userController');



router.route('/register').post(userController.userRegister);
























module.exports=router;