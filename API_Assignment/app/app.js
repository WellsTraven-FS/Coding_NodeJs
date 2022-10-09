const express = require("express");
const apiRouter = require("../router/apiRouter");
const app = express();

// default service  call (actuator)
app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Service is up",
    });
});

app.use(express.json());

// outter middleware
app.use("/api", apiRouter);

// add middleware to handle errors
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
            method: req.method,
        },
    });
});

module.exports = app;
