const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        message: "TRAINER - GET ",
    });
});
router.post("/", (req, res, next) => {
    res.json({
        message: "TRAINER - POST",
    });
});
router.get("/:trainerId", (req, res, next) => {
    const trainerId = req.params.trainerId;
    res.json({
        message: "TRAINER - GET BY ID ",
        id: trainerId,
    });
});
router.patch("/:trainerId", (req, res, next) => {
    const trainerId = req.params.trainerId;
    res.json({
        message: "TRAINER - PATCH BY ID ",
        id: trainerId,
    });
});
router.delete("/:trainerId", (req, res, next) => {
    const trainerId = req.params.trainerId;
    res.json({
        message: "TRAINER - DELETE BY ID ",
        id: trainerId,
    });
});

module.exports = router;
