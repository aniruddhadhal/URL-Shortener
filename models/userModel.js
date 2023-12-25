const mongoose = require('mongoose')




const userSchema = new mongoose.Schema({

    name: {
        type: String,

    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },

}, { timestamps: true });



const userModel = mongoose.model('users', userSchema)

module.exports = userModel;