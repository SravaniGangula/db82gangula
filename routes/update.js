var express = require('express');
const Rabbit_controlers= require('../controllers/Rabbit');
var router = express.Router();


/* GET create update page */
router.get('/update', Rabbit_controlers.Rabbit_update_Page);

module.exports = router;