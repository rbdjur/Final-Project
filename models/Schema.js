const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name: { type: String, required: true },
    picture: { type: String, },
    description: {type: String, required: true },
    price: { type: Number, required: true }

});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;

