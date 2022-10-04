const express = require("express");
const router = require("../router/router");

const app = express();

//middleware
app.use(express.json());

// default service call (actuator)
// app.get("/", (req, res, next) => {
//     res.setMaxListeners(200).json({
//         message: "Service is up",
//     });
// });

// 'GET' - Localhost:3000
app.get("/", (req, res, next) => {
    res.setMaxListeners(200).json({
        message: "Service for 'GET' is up",
    });
});

// 'POST' - Localhost:3000
app.post("/", (req, res, next) => {
    res.setMaxListeners(200).json({
        message: "Service for 'POST' is up",
    });
});

// Localhost:3000
app.use("/example", router);

//add midleware to handle errors and bad urls
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;
