const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET - SUCCESS",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// 'GET by ID' - Localhost:3000/example/45
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "GET ID - CREATED",
        id: id,
    });
});

// 'PATCH by ID' - Localhost:3000/89
router.patch("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "PATCH ID - CREATED",
        id: id,
    });
});

//'DELETE by ID' - Localhost:300/9
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "DELETE ID - CREATED",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// 'GET' - Localhost:3000

module.exports = router;
