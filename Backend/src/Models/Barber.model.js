import mongoose from "mongoose";
import bcrypt from "bcrypt";

const barberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    aadhar: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: "",
    },
    barberService: {
        ref: "Service",
        type: mongoose.Schema.Types.ObjectId,
    },
    todayCustomerAppointments: [
        {
            ref: "Customer",
            type: mongoose.Schema.Types.ObjectId,
        },
    ],
    workHistory: [
        {
            ref: "CustomerHistory",
            type: mongoose.Schema.Types.ObjectId,
        },
    ],
    barberRating: {
        type: Number,
    },
    barberAvailableStatus: {
        type: String,
        enum: ["present", "absent"],
    },
    salary: {
        type: Number,
        required: true,
    },
    refreshToken: {
        type: String,
        default: "",
    },
});

barberSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

barberSchema.methods.isValidatePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const Barber = mongoose.model("Barber", barberSchema);
export default Barber;
