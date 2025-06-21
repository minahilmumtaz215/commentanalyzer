require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// ✅ Custom CORS Configuration
const corsOptions = {
  origin: "*", // Frontend ka origin allow karo
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// ✅ Debugging Middleware (Check karo requests aa rahi hain ya nahi)
app.use((req, res, next) => {
  console.log(`📢 Request received: ${req.method} ${req.url}`);
  next();
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Routes
const feedbackRoutes = require("../../Documents/FYP Backend/Feedback/routes/feedbackRoutes");
app.use("/api/feedback", feedbackRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("🚀 Feedback API Running...");
});

// ✅ Handle Preflight Requests
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(200);
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
