var express = require('express');
const Rabbit_controlers= require('../controllers/Rabbit');
var router = express.Router();
/* GET detail Rabbit page */ 
router.get('/detail', Rabbit_controlers.Rabbit_view_one_Page); 

module.exports = router;