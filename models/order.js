const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    service: {
        type: String
        //required: true
    },
    date: {
        type: Date,
        required: true
    } /*,
    cabin: {
        type: String,
        required: true
    }*/
    
}, {timestamps: true})

module.exports = mongoose.model(
    'Order',
    orderSchema
)