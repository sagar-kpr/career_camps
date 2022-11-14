const mongoose = require('mongoose');

const student_schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    id : {
        type : String,
        required: true,
        unique : true
    },
    password :{
        type : String,
        required: true
    }
})


const User = mongoose.model('User', student_schema) ;

module.exports = User;