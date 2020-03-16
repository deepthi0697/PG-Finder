const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tenantsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    adhar: {
        type: String,
        required: true
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    checkin: {
        type: String,
        required: true
    },
    checkout: {
        type: String,
        required: true
    },
    deposit: {
        type: String,
        required: true
    }
})

const Tenant = mongoose.model('Tenant', tenantsSchema)

module.exports = Tenant