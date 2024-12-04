import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        trim: true,
    },
    age: {
        type: Number,
    },
    mobile: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    history: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CustomerHistory",
        },
    ],
    coupon: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Coupon",
        },
    ],
});

export const Customer = mongoose.nodek("Customer", customerSchema);
