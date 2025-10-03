// ================== Core & Security ==================
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";

import dotenv from "dotenv";
dotenv.config();
// ================== Database ==================
import mongoose from "mongoose";

// ================== File Handling ==================
import multer from "multer";
// import fileUpload from "express-fileupload";

// ================== Auth ==================
import jwt from "jsonwebtoken";

// ================== Email ==================
import nodemailer from "nodemailer";

// ================== Utilities ==================
// import _ from "lodash";
// import mongoSanitize from "express-mongo-sanitize";
import xss from "xss";
// ================== Config ==================
import {
  JWT_SECRET,
  JWT_EXPIRATION_TIME,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_SECURE,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  MAX_JSON_SIZE,
  URL_ENCODED,
  WEB_CACHE,
  REQUEST_LIMIT_TIME,
  // DATA_BASE_CONNECTION,
  REQUEST_LIMIT_NUMBER,
} from "./app/config/config.js";

// ================== Routes ==================
import { router } from "./routes/api.js";
// ================== Setup ==================

const app = express();

// ================== Security & Middleware ==================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);
app.set("etag", false);

//* midleware
app.use(cookieParser());
app.use(cors());
app.use(helmet());
// app.use(mongoSanitize());
app.use((req, res, next) => {
  if (req.body) {
    for (let key in req.body) {
      if (typeof req.body[key] === "string") {
        req.body[key] = xss(req.body[key]);
      }
    }
  }
  next();
});
app.use(hpp());

// Middleware
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED, limit: MAX_JSON_SIZE }));

// ================== Database Connection ==================
mongoose
  .connect(process.env.DATA_BASE_CONNECTION, { autoIndex: true })
  .then(() => console.log("✅ Database connected"))
  .catch((error) => console.log(error));

// ================== Routes ==================
app.use("/api", router);

// ================== Export ==================
export { app };
