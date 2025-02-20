const express = require("express");
const authMiddleware = require("../config/auth");
const Alert = require("../models/Alert");

const router = express.Router();


router.post("/create", authMiddleware, async (req, res) => {
    const { metric, threshold, condition } = req.body;

    try {
        const alert = new Alert({ userId: req.user.id, metric, threshold, condition });
        await alert.save();
        res.status(201).json(alert);
    } catch (error) {
        res.status(500).json({ message: "Error creating alert", error });
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        const alerts = await Alert.find({ userId: req.user.id });
        res.json(alerts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching alerts", error });
    }
});

module.exports = router;
