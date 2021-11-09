var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Rabbit_controller = require('../controllers/Rabbit');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Rabbit ROUTES ///
// POST request for creating a Rabbit.
router.post('/resource/Rabbits', Rabbit_controller.Rabbit_create_post);
// DELETE request to delete Rabbit.
router.delete('/resource/Rabbits/:id', Rabbit_controller.Rabbit_delete);
// PUT request to update Rabbit.
router.put('/resource/Rabbits/:id',
Rabbit_controller.Rabbit_update_put);
// GET request for one Rabbit.
router.get('/resource/Rabbits/:id', Rabbit_controller.Rabbit_detail);
// GET request for list of all Rabbit items.
router.get('/resource/Rabbits', Rabbit_controller.Rabbit_list);
module.exports = router;