const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        message: "TRAINEE - GET ",
    });
});
router.post("/", (req, res, next) => {
    res.json({
        message: "TRAINEE - POST",
    });
});
router.get("/:traineeId", (req, res, next) => {
    const traineeId = req.params.traineeId;
    res.json({
        message: "TRAINEE - GET BY ID ",
        id: traineeId,
    });
});
router.patch("/:traineeId", (req, res, next) => {
    const traineeId = req.params.traineeId;
    res.json({
        message: "TRAINEE - PATCH BY ID ",
        id: traineeId,
    });
});
router.delete("/:traineeId", (req, res, next) => {
    const traineeId = req.params.traineeId;
    res.json({
        message: "TRAINEE - DELETE BY ID ",
        id: traineeId,
    });
});

module.exports = router;
