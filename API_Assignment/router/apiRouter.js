const express = require("express");
const apiRouter = express.Router();

const {
    getRandomUser,
    getRandomUserById,
} = require("../services/randomJokesService");

apiRouter.get("/user", (req, res, next) => {
    getRandomUser()
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
    getRandomUserById(req.params.id)
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
