
const mongoose = require('mongoose');

const student_basic_schema = new mongoose.Schema({
    student : {
        type: String,
        required: true
    },
    batch : {
        type: String,
        required: true
    },
    rollnbr: {
        type: Number,
        required: true,
        unique: true
    },
    collage:{
        type: String,
        required: true
    },
    dsa:{
        type: Number,
        required: true
    },
    web:{
        type: Number,
        required: true
    },
    react: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }

},{
    timestamps:true
});


const StudentBasic = mongoose.model('StudentBasic', student_basic_schema)

module.exports =StudentBasic