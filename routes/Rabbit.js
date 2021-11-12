var express = require('express');
const Rabbit_controlers= require('../controllers/Rabbit');
var router = express.Router();

// GET request for one Rabbit. 
router.get('/Rabbits/:id', Rabbit_controlers.Rabbit_detail); 

module.exports = router;
