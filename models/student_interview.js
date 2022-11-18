
const mongoose = require('mongoose');

const student_interview = new mongoose.Schema({
    candidate : {
        type: String,
    },
    company : {
        type: String,
        required: true
    },
    location: {
        type: Number,
        required: true,
        unique: true
    },
    apply:{
        type: String,
        required: true
    },
    date:{
        type: Number,
        required: true
    },
    basics: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'StudentBasic'
    }

},{
    timestamps:true
});


const StudentInterview = mongoose.model('StudentInterview', student_interview)

module.exports = StudentInterview