const mongoose = require("mongoose");

const trainerListSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    YOE: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("TrainerList", trainerListSchema);
