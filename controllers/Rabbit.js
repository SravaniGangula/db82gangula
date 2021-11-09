var Rabbit = require('../models/Rabbit');
// List of all Rabbits

// for a specific Rabbit.
exports.Rabbit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Rabbit detail: ' + req.params.id);
};
// Handle Rabbit create on POST.

// Handle Rabbit delete form on DELETE.
exports.Rabbit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Rabbit delete DELETE ' + req.params.id);
};
// Handle Rabbit update form on PUT.
exports.Rabbit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Rabbit update PUT' + req.params.id);
};

// List of all Rabbits
exports.Rabbit_list = async function(req, res) {
    try{
    theRabbits = await Rabbit.find();
    res.send(theRabbits);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Rabbit create on POST.
exports.Rabbit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Rabbit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Rabbit_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Cost = req.body.Cost;
    document.Weight = req.body.Weight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.Rabbit_view_all_Page = async function(req, res) {
    try{
    theRabbits = await Rabbit.find();
    res.render('Rabbit', { title: 'Rabbit Search Results', results: theRabbits });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };