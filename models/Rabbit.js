const mongoose = require("mongoose")
const RabbitSchema = mongoose.Schema({
Name: {
    type: String,
    minLength: 2,
},
Cost: String,
Weight: Number
})
module.exports = mongoose.model("Rabbit",
RabbitSchema)