import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    },
    basicPlan: {
        type: Number,
        required: true,
    },
    premimumPlan: {
        type: Number,
    },
    serviceDescription: {
        type: String,
        required: true,
    },
    serviceDuration: {
        type: Number,
        required: true,
    },
    serviceImage: {
        type: String,
        required: true,
        trim: true,
    },
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
