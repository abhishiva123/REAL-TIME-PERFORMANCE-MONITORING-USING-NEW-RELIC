const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/metrics", require("./routes/metricsRoutes"));
app.use("/api/alerts", require("./routes/alertRoutes"));


app.listen(5000, () => console.log("Server running on port 5000"));
