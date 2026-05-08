import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { baseRateLimitOptions } from "./config/rateLimit.config.js";
import contactRouter from "./routers/contact.route.js";

const app = express();
app.set("trust proxy", 1);

app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS
      ? process.env.ALLOWED_ORIGINS.split(",")
      : ["http://localhost:5173"],
    credentials: true,
  })
);

// Rate-limit contact endpoint to 10 requests per 15 min per IP
const contactLimit = rateLimit({
  ...baseRateLimitOptions,
  windowMs:   15 * 60 * 1000,
  max:        10,
  message:    { message: "Too many requests. Please try again later." },
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime().toFixed(2) + "s" });
});

app.use("/api/v1/contact", contactLimit, contactRouter);

export default app;
