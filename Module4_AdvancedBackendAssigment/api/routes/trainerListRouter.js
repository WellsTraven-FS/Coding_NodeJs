const mongoose = require("mongoose");
const express = require("express");
const TrainerList = require("../model/trainerList");
const { findTrainer, addTrainer } = require("../../db/db");
const router = express.Router();
const Messages = require("../../messages/messages");

const Trainer = require("../model/trainerList");

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
router.get("/", (req, res) => {
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

router.get("/:trainerListId", (req, res, next) => {
    const trainerListId = req.params.trainerListId;
    TrainerList.findById(trainerListId)
        .select("_id name")
        .populate("specialty YOE")
        .exec()
        .then((trainer) => {
            if (!trainer) {
                console.log(trainer);
                return res.status(404).json({
                    message: Messages.trainer_not_found,
                });
            }
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
router.patch("/:trainerListId", (req, res, next) => {
    const trainerListId = req.params.trainerListId;
    TrainerList.findById(trainerListId)
        .select("_id name ")
        .populate("specialty YOE")
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
router.delete("/trainerListId", (req, res, next) => {
    const trainerListId = req.params.trainerListId;

    TrainerList.deleteOne({
        _id: trainerListId,
    })
        .exec()
        .then((result) => {
            res.status(200).json({
                messsage: Messages.trainer_deleted,
                request: {
                    method: "GET",
                    url: "http://localhost:6000/trainerList" + trainerListId,
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
