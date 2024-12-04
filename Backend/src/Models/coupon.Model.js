import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    couponName: {
        type: String,
        required: true,
        trim: true,
    },
    couponCode: {
        type: String,
        required: true,
        trim: true,
    },
    value: {
        type: Number,
        required: true,
    },
    couponExpiry: {
        type: Date,
        required: true,
    },
});

export const Coupon = mongoose.model("Coupon", couponSchema);
