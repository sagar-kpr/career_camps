
const mongoose = require('mongoose');

const student_interview = new mongoose.Schema({
    company : {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    working:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'StudentBasic'
    }

},{
    timestamps:true
});


const StudentInterview = mongoose.model('StudentInterview', student_interview)

module.exports = StudentInterview