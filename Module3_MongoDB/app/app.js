const express = require("express");
const app = express();
const morgan = require("morgan");

// MongoDB connection
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://localhost:27017/health");
    console.log("Mongodb connection successful");
}

const trainerRoutes = require("../api/routes/trainers");
const traineeRoutes = require("../api/routes/trainees");

// middleware for logging
app.use(morgan("dev"));

// parsing
app.use(
    express.urlencoded({
        extended: true,
    })
);

// middleware that all request are json
app.use(express.json());

// middleware tp handle the CORS Policy
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST,PUT,GET,PATCH,DELETE");
    }
    next();
});

app.get("/", (req, res, next) => {
    res.status(201).json({
        message: "Server is up",
        method: req.method,
    });
});

app.use("/trainer", trainerRoutes);
app.use("/trainee", traineeRoutes);

// add middleware t0 handle erros and bad url paths
app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
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

// connect to mongodb
// mongoose.connect(process.env.mongoDBURL, (err) => {
//     if (err) {
//         console.error("Error: ", err.message);
//     } else {
//         console.log("MongoDB connection Successful");
//     }
// });
module.exports = app;
