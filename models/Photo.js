const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    title: String,
    description: String,
    image: String,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("photoSchema", photoSchema)