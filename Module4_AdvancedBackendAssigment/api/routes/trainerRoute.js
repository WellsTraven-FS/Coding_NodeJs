const express = require("express");
const router = express.Router();
const { addTrainer, findTrainer } = require("../../db/db");
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

            if (trainer.length > 0) {
                res.status(406).json({
                    message: `${result[0].trainer} trainer cataloged`,
                });
            } else {
                const newTrainer = new Trainer({
                    name: req.body.name,
                    specialty: req.body.specialty,
                    YOE: req.body.YOE,
                });
                addTrainer(newTrainer)
                    .then((trainer) => {
                        console.log(trainer);
                        res.status(201).json({
                            message: "Trainer Saved",
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
    // if found return message trainer list
    //
});

module.exports = router;
