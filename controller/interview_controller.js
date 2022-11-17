const User = require('../models/schema');
const StudentBasic = require('../models/student_basic_schema');

module.exports.inteview = async function(req,res){
    let studentId = await StudentBasic.findById(req.params.id);
    console.log('ttt', studentId)
    return res.render('interview',{
        lists: studentId

    })
    
}