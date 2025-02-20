const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    metric: { type: String, required: true },
    threshold: { type: Number, required: true },
    condition: { type: String, enum: ["greater", "less"], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Alert", AlertSchema);
