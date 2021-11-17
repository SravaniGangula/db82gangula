var express = require('express');
const Rabbit_controlers= require('../controllers/Rabbit');
var router = express.Router();
/* GET create Rabbit page */
router.get('/delete', Rabbit_controlers.Rabbit_delete_Page);

module.exports = router;