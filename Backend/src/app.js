import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';
dotenv.config({
    path: './.env',
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors( {
    origin: process.env.CORS_ORIGIN,
    credientials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    res.send("welcome to Glow Quick Backend Server...");
})

export default app;