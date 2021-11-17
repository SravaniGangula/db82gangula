var Rabbit = require('../models/Rabbit');

// Handle a delete one view with id from query
exports.Rabbit_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Rabbit.findById(req.query.id)
    res.render('Rabbitdelete', { title: 'Rabbit Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a Rabbit.
// query provides the id
exports.Rabbit_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Rabbit.findById(req.query.id)
    res.render('Rabbitupdate', { title: 'Rabbit Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a Rabbit.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Rabbit_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Rabbitcreate', { title: 'Rabbit Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a show one view with id specified by query 
exports.Rabbit_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Rabbit.findById(req.query.id)
        console.log(result);
        res.render('Rabbitdetail', {
            title: 'Rabbit Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// for a specific Rabbit. 
exports.Rabbit_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Rabbit.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle Rabbit delete on DELETE.
exports.Rabbit_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Rabbit.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Rabbit update form on PUT. 
exports.Rabbit_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Rabbit.findById(req.params.id)
        // Do updates of properties 
        if (req.body.Name)
            toUpdate.Name = req.body.Name;
        if (req.body.Cost) toUpdate.Cost = req.body.Cost;
        if (req.body.Weight) toUpdate.Weight = req.body.Weight;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// List of all Rabbits
exports.Rabbit_list = async function (req, res) {
    try {
        theRabbits = await Rabbit.find();
        res.send(theRabbits);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Rabbit create on POST.
exports.Rabbit_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Rabbit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Rabbit_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Cost = req.body.Cost;
    document.Weight = req.body.Weight;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.Rabbit_view_all_Page = async function (req, res) {
    try {
        theRabbits = await Rabbit.find();
        res.render('Rabbit', {
            title: 'Rabbit Search Results',
            results: theRabbits
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};