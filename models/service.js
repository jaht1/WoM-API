const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    service: {
        type: String
    }
    
}, {timestamps: true})

module.exports = mongoose.model(
    'Service',
    serviceSchema
)