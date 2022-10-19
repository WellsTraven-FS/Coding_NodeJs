const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Trainer = require("../routes/models/trainer");

router.get("/", (req, res, next) => {
    const newTrainer = new Trainer({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author,
    });
    newTrainer
        .save()
        .then((result) => {
            console.log(result);
            res.status(200).json({
                message: "Trainer Added",
                trainer: {
                    title: result.title,
                    author: result.author,
                    id: result._id,
                    metadata: {
                        method: req.method,
                        host: req.hostname,
                    },
                },
            });
        })
        .catch((err) => {
            console.error(err.message);
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });

    // res.json({
    //     message: "TRAINER - GET ",
    // });
});

router.post("/", (req, res, next) => {
    const newTrainer = new Trainer({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author,
    });
    newTrainer
        .save()
        .then((result) => {
            console.log(result);
            res.status(200).json({
                message: "Trainer has been saved",
                trainer: {
                    title: result.title,
                    author: result.author,
                    id: result._id,
                    metadata: {
                        method: req.method,
                        host: req.hostname,
                    },
                },
            });
        })
        .catch((err) => {
            console.error(err.message);
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });

    // res.json({
    //     message: "TRAINER - POST",
    // });
});

router.get("/:trainerId", (req, res, next) => {
    const trainerId = req.params.trainerId;

    const updatedTrainer = {
        title: req.body.title,
        author: req.body.author,
    };

    Trainer.updateOne(
        {
            _id: trainerId,
        },
        { $set: updatedTrainer }
    )
        .then((result) => {
            res.status(200).json({
                message: "Updated Trainer",
                trainer: {
                    title: result.title,
                    author: result.author,
                    id: result._id,
                },
                metadata: {
                    host: req.hostname,
                    method: req.method,
                },
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

router.patch("/:trainerId", (req, res, next) => {
    const trainerId = req.params.trainerId;

    const updatedTrainer = {
        title: req.body.title,
        author: req.body.author,
    };

    Trainer.updateOne(
        {
            _id: trainerId,
        },
        { $set: updatedTrainer }
    )
        .then((result) => {
            res.status(200).json({
                message: "2nd Updated Trainer",
                trainer: {
                    title: result.title,
                    author: result.author,
                    id: result._id,
                },
                metadata: {
                    host: req.hostname,
                    method: req.method,
                },
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});
router.delete("/:trainerId", (req, res, next) => {
    const newTrainer = new Trainer({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author,
    });
    newTrainer
        .save()
        .then((result) => {
            console.log(result);
            res.status(200).json({
                message: "Trainer Deleted",
                trainer: {
                    title: result.title,
                    author: result.author,
                    id: result._id,
                    metadata: {
                        method: req.method,
                        host: req.hostname,
                    },
                },
            });
        })
        .catch((err) => {
            console.error(err.message);
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

module.exports = router;
