const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    picture: { type: String, },
    // Follow up on picture - How will pictures be stored in the database? as a string?
    description: {type: String, required: true },
    price: { type: Number, required: true }

});

// db.itemSchema.insertMany({
//     name: "Ron",
//     picture: "my.img",
//     description: "stuff",
//     price: 19.99
// })

const Item = mongoose.model("Item", itemSchema);

// go into seed file
db.itemSchema.insertMany(items);

//const Item = mongoose.model("FinalProject", ItemSchema);

module.exports = Item;

