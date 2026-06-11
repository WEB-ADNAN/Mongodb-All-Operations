const mongoose = require('mongoose')
const {Schema} = mongoose

const addressSchema = new Schema({
    city: String,
    street: String,
    state: String,
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'Registration'
    }
})

module.exports = mongoose.model('Address', addressSchema)