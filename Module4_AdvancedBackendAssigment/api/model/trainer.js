const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        require: true,
    },
    YOE: {
        type: Number,
        require: true,
    },
});

module.exports = mongoose.model("Trainer", trainerSchema);
