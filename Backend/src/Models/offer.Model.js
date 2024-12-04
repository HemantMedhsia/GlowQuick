import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    offerName: {
        type: String,
        required: true,
        trim: true,
    },
    offerValue: {
        type: Number,
        required: true,
    },
});

export const Offer = mongoose.model("Offer", offerSchema);
