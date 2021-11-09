const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
Name: String,
Cost: String,
Weight: Number
})
module.exports = mongoose.model("Costume",
costumeSchema)