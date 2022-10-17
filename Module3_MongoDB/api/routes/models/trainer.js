const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    author: String,
});

module.exports = mongoose.model("Trainer", trainerSchema);
