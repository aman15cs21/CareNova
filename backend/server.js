import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Import Routes
import predictRoutes from "./routes/predict.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
dotenv.config({ path: path.join(projectRoot, ".env") });

const app = express();

// Middlewares
const defaultFrontendOrigins = [
  "http://localhost:5173",
  "https://care-nova-iota.vercel.app",
];
const allowedOrigins = [...defaultFrontendOrigins, ...(process.env.FRONTEND_URL || "")
  .split(",")]
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

// Default Test Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "CareNova Backend is running..." });
});

// Routes
app.use("/api/predict", predictRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Keep the API available for non-DB routes even if MongoDB is offline.
const connectDatabase = async () => {
  if (!process.env.MONGO_URI) {
    console.log("MongoDB URI not configured; continuing without database.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "healthcheck",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB unavailable:", error.message);
  }
};

connectDatabase();
