const express = require("express");
const axios = require("axios");
const router = express.Router();


router.get("/metrics", async (req, res) => {
    try {
        const response = await axios.get("https://api.newrelic.com/v2/applications.json", {
            headers: { "API-Key": process.env.NEW_RELIC_API_KEY }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching metrics", error });
    }
});

module.exports = router;
