import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { barberRoutes } from "./Routes/barber.Routes.js";
import { serviceRoutes } from "./Routes/Service.Routes.js";
dotenv.config({
    path: "./.env",
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credientials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("welcome to Glow Quick Backend Server...");
});

app.get("/hemant", (req, res) => {
    res.send(
        "welcome to Hemant Github Page... || https://github.com/hemantmedhsia"
    );
});

app.use("/api", barberRoutes);
app.use("/api", serviceRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Internal Server Error" } = err;
    res.status(statusCode).json({ error: message });
});

export default app;
