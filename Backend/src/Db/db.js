import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error connecting to database", error);
        process.exit(1);
    }
};

export default connectDb;
