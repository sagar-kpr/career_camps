const StudentBasic = require('../models/student_basic_schema');

module.exports.basic = async function(req,res){
    let rollnbr = await StudentBasic.findOne({rollnbr: req.body.rollnbr});

    if(req.xhr){
        if(!rollnbr){
            //let post = await StudentBasic.find({});
            StudentBasic.create(req.body, function(err,student){
                if(err) { console.log('err in creating',err); return }
                console.log(student)
                return res.status(200).json({
                    data: {
                        lists : student
                    }
                });
    
            });
        }else{
            return res.redirect('back');
        }

    }

    
    

}    