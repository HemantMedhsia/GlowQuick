import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./Db/db.js";

const PORT = process.env.PORT || 4000;

dotenv.config({
    path: "./.env",
});

app.get("/", (req, res) => {
    res.send("Welcome to Glow Quick");
});

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        app.on("error", (error) => {
            console.log("Error connecting to server", error);
        });
    })
    .catch((error) => {
        console.log("Error connecting to database", error);
        process.exit(1);
    });
