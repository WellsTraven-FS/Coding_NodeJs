const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { findTrainer, addTrainer } = require("../../db/db");
const Trainer = require("../model/trainer");

router.post("/", (req, res) => {
    // find trainer
    findTrainer({
        name: req.body.name,
        specialty: req.body.specialty,
        YOE: req.body.YOE,
    })
        .then((trainer) => {
            console.log(trainer);

            // if found return message trainer list
            if (trainer.length > 0) {
                res.status(406).json({
                    message: `${result[0].trainer} trainer cataloged`,
                    trainer: {
                        name: trainer.name,
                        specialty: trainer.specialty,
                        YOE: trainer.YOE,
                    },
                });
            } else {
                const newTrainer = new Trainer({
                    _id: mongoose.Types.ObjectId(),
                    name: req.body.name,
                    specialty: req.body.specialty,
                    YOE: req.body.YOE,
                });
                addTrainer(newTrainer)
                    .then((trainer) => {
                        console.log(trainer);
                        res.status(201).json({
                            message: "Trainer Saved",
                            trainer: {
                                name: trainer.name,
                                specialty: trainer.specialty,
                                YOE: trainer.YOE,
                            },
                        });
                    })
                    .catch((error) => {
                        res.status(error.status || 500).json({
                            error: {
                                message: error.message,
                            },
                        });
                    });
            }
        })
        .catch((error) => {
            res.status(501).json({
                message: error.message,
            });
        });
    //
});

router.get("/:trainerId", (req, res, next) => {
    const trainerId = req.params.trainerId;
    Trainer.findById(trainerId)
        .select("_id")
        .select("name")
        .select("specialty")
        .select("YOE")
        .exec()
        .then((trainer) => {
            console.log(trainer);
            res.status(201).json({
                trainer: trainer,
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: {
                    message: error.message,
                },
            });
        });
});
router.patch("/:trainerId", (req, res, next) => {
    const trainerId = req.params.trainerId;
    Trainer.findById(trainerId)
        .select("_id")
        .select("name")
        .select("specialty")
        .select("YOE")
        .exec()
        .then((trainer) => {
            console.log(trainer);
            res.status(201).json({
                trainer: trainer,
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: {
                    message: error.message,
                },
            });
        });
});
router.delete("/trainerId", (req, res, next) => {
    const trainerId = req.params.trainerId;

    Trainer.deleteOne({
        _id: trainerId,
    })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: "Trainer Deleted",
                request: {
                    method: "GET",
                    url: "http://localhost:6000/trainer" + trainerId,
                },
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: error.message,
            });
        });
});

module.exports = router;
