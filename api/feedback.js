// api/feedback.js
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

// Mongoose cache
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Connect to DB
async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      dbName: "feedbackDBs",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Feedback model schema
const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

// Avoid model overwrite error in Vercel
const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

// API Route Handler
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectToDatabase();

    const { name, email, message } = req.body;

    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    return res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (err) {
    console.error("❌ Feedback Error:", err);
    return res.status(500).json({ error: "Failed to submit feedback" });
  }
}
