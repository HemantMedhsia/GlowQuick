import mongoose from 'mongoose';

const tokenSchema = mongoose.Schema( { 
    tokenNumber: {
        type: Number,
        required: true,
    },
    TokenDateAndTime: {
        type: Date,
        required: true,
    },
    serviceMan: {
        ref: 'Barber',
        type: mongoose.Schema.Types.ObjectId,
    },
    customer: {
        ref: 'Customer',
        type: mongoose.Schema.Types.ObjectId,
    },
})

const Token = mongoose.model('Token', tokenSchema);

export default Token;