const express = require('express')


const {


    registerController,
    loginController,
} = require('../controllers/userController')





const router = express.Router();



//REGISTER || POST
router.post("/register", registerController);


router.post('/login', loginController);


module.exports = router;