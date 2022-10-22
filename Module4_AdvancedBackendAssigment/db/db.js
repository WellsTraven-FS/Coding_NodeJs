const mongoose = require("mongoose");

const Trainer = require("../api/model/trainer");

const connect = () => {
    mongoose.connect("mongodb://localhost:27017/test", (err) => {
        // console.log("connected to Test DB");
    });
};

const addTrainer = async (newTrainer) => {
    console.log("saving added trainer");

    return await newTrainer.save();
};

const findTrainer = async (object) => {
    console.log("find added trainer");

    return await Trainer.find(object).exec();
};

const disconnect = () => {
    console.log("Disconnecting");
    mongoose.connection.close();
};

module.exports = { connect, addTrainer, findTrainer, disconnect };
