const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const trainerRouter = require("../api/routes/trainerRoute");
const trainerListRouter = require("../api/routes/trainerListRouter");

// parsing
app.use(express.urlencoded({ extended: true }));

// parse json payload
app.use(express.json());

// use cors middleware
app.use(cors());

// acuator
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Service is up ",
    });
});

// use middleware for router
app.use("/trainer", trainerRouter);
app.use("/trainerList", trainerListRouter);

// use middleware to handle errpr
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

// response json middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

mongoose.connect("mongodb://localhost:27017/prominentfitness", (err) => {
    console.log("mongodb is connected");
});

module.exports = app;
