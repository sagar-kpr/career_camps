
const { $where } = require('../models/student_basic_schema');
const StudentBasic = require('../models/student_basic_schema');
module.exports.inteview = async function(req,res){
    let studentId = await StudentBasic.findById(req.params.id);
   // console.log('ttt', studentId)

    /*await fetch('https://remotive.io/api/remote-jobs?category=software-dev')
    .then( (res) => res.json())
    .then( (json) => {
        console.log('eweqewqeqweq',json)
    } )*/

   
    return res.render('interview',{
        profile: studentId

    })
    
}