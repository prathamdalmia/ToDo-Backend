const mongoose = require("mongoose");


const toDoSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true,
        trim : true
    },
    startDate : {
        type: Date,
        default : new Date()
    },
    endDate : {
        type : Date,

    },
    description : {
        type : String ,
        trim : true
    },
    username : {
        type : String,
        trim : true
    }
});

module.exports = mongoose.model('To-Do',toDoSchema);