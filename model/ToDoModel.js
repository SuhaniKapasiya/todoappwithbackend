const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true   
    },
    isCompleted:{
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model('ToDo',todoSchema);