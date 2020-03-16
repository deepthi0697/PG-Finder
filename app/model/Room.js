const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
    roomNo: {
        type: String,
        required: true
    },
    building: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Building'
    },
    facing: {
        type: String,
        required: true
    }
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room