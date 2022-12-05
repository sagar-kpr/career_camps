const StudentBasic = require('../models/student_basic_schema');
const User = require('../models/schema');
const StudentInterview = require('../models/student_interview');


module.exports.basic = async function(req,res){
    if(req.body.dsa > 100 || req.body.dsa < 0 
    || req.body.web > 100 || req.body.web < 0 
    || req.body.react > 100 || req.body.react < 0
    || req.body.rollnbr < 0){
        if(req.xhr){
            return res.status(200).json({
                data:{
                    message : 'value-error'
                }
            })
        }
    }
    let rollnbr = await StudentBasic.findOne({rollnbr: req.body.rollnbr});

    if(!rollnbr){
        let user = await StudentBasic.create({
            student: req.body.student,
            batch: req.body.batch,
            rollnbr: req.body.rollnbr,
            collage : req.body.collage,
            dsa: req.body.dsa,
            web : req.body.web,
            react : req.body.react,
            user: req.user._id

        });

        let admin = await User.findById(req.user._id);
        admin.students.push(user);
        admin.save();
        if(req.xhr){
            return res.status(200).json({
                data: {
                    message: 'found',
                    lists : user,
                    admin: admin
                }
            });
        }    

    }else{
        if(req.xhr){
            return res.status(200).json({
                data:{
                    message: 'not-found'
                }
            })
        }
       
    }
}    


module.exports.interview = async function(req,res){
    let user = await StudentBasic.findById(req.params.id)
    if(user){
        let interview = await StudentInterview.create({
            company: req.body.company,
            title:req.body.title,
            location:req.body.location,
            working: req.body.working,
            date: req.body.date,
            user: req.params.id
        })

        user.interviews.push(interview)
        user.save();
        return res.redirect('back')

    }
    
   
}