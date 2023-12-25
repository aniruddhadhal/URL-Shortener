const mongoose = require('mongoose')

const userModel = require('../models/userModel')
const { Schema, model } = mongoose;



const urlSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: userModel.modelName
    },
    longurl: {
        type: String
    },
    shorturl: {
        type: String,
        unique: true,
        sparse: true
    }
});


const urlModel = model('urlSchemamodel', urlSchema)

module.exports = urlModel;