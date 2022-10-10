const express = require("express");
const apiRouter = express.Router();

const {
    getRandomApi,
    getRandomById,
    getRandomByName,
} = require("../services/randomService");

apiRouter.get("/", (req, res, next) => {
    getRandomApi()
        .then((result) => {
            console.log(result);
            res.status(200).json(result.data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                error: {
                    message: error.message,
                },
            });
        });
});

apiRouter.get("/:id", (req, res, next) => {
    getRandomById(req.params.id)
        .then((result) => {
            res.status(200).json(result.data);
        })
        .catch((error) => {
            res.status(500).json({
                error: {
                    message: error.message,
                },
            });
        });
});

apiRouter.get("/:name", (req, res, next) => {
    getRandomByName(req.params.name)
        .then((result) => {
            res.status(200).json(result.data);
        })
        .catch((error) => {
            res.status(500).json({
                error: {
                    message: error.message,
                },
            });
        });
});

module.exports = apiRouter;
