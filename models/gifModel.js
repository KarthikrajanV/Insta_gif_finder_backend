const mongoose = require('mongoose')

const gifSchema = new mongoose.Schema({
    name:{
        required : true,
        type:String
    },
    gifName:{
        required : true,
        type:String
    },
    image:{
        required : true,
        type:String
    }
})

exports.Gif = mongoose.model('Gif',gifSchema)