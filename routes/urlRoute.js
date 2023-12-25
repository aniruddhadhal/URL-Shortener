const express = require('express')

const {
    handalurlcontroller,
    handalshorturlcontroller,


} = require('../controllers/urlcontroller')



const router = express.Router();


router.post('/urlsend', handalurlcontroller);

router.get('/:url', handalshorturlcontroller)

// router.post('/getUserUrl', getuserUrlController)





module.exports = router;