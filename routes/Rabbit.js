var express = require('express');
const Rabbit_controlers= require('../controllers/Rabbit');
var router = express.Router();

// GET request for one Rabbit. 
router.get('/', Rabbit_controlers.Rabbit_view_all_Page); 

module.exports = router;
