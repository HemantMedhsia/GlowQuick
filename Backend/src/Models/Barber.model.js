import e from 'express';
import mongoose from 'mongoose';

const barberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    addhar: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    barberService: {
        ref: 'BarberService',
        type: mongoose.Schema.Types.ObjectId
    },
    todayCustomerAppointments: [{
        ref: 'CustomerAppointment',
        type: mongoose.Schema.Types.ObjectId
    }],
    workHistory: [{
        ref: 'CustomerHistory',
        type: mongoose.Schema.Types.ObjectId
    }],
    barberRating: {
        type: Number,
        required: true
    },
    barberStatus: {
        type: String,
        enum: ['present', 'absent'],
    },
    salary: {
        type: Number,
        required: true
    }
})

const Barber = mongoose.model('Barber', barberSchema );
export default Barber;