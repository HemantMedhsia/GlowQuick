import mongoose from "mongoose";

const customerHistorySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
        },
    ],
    payment: {
        type: Number,
        required: true,
    },
    remaining: {
        type: Number,
        required: true,
    },
});

export const CustomerHistory = mongoose.model(
    "CustomerHistory",
    customerHistorySchema
);
