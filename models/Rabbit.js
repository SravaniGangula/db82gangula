const mongoose = require("mongoose")
const RabbitSchema = mongoose.Schema({
Name: String,
Cost: String,
Weight: Number
})
module.exports = mongoose.model("Rabbit",
RabbitSchema)