const mongoose = require('mongoose');

const student_schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    userId : {
        type : Number,
        required: true,
        unique : true
    },
    password :{
        type : String,
        required: true
    },
    students :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'StudentBasic'
    }]
},{
    timestamps: true
});


const User = mongoose.model('User', student_schema) ;

module.exports = User;