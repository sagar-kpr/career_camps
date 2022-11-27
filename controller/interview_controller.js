
//const { $where } = require('../models/student_basic_schema');
const StudentBasic = require('../models/student_basic_schema');

const StudentInterview = require('../models/student_interview');

module.exports.inteview = async function(req,res){
    let studentId = await StudentBasic.findById(req.params.id);
    let list = await StudentInterview.find({})
    
    console.log('newwww', list)
    console.log('nww', studentId)
    return res.render('interview',{
        profile: studentId,
        jobsList:list

    })
    
}
