const StudentBasic = require('../models/student_basic_schema');
const User = require('../models/schema');
const StudentInterview = require('../models/student_interview');


module.exports.basic = async function(req,res){

    let rollnbr = await StudentBasic.findOne({rollnbr: req.body.rollnbr});

    if(req.xhr){
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
            console.log('ewe',admin)
            return res.status(200).json({
                data: {
                    lists : user,
                    admin: admin
                }
            });


        }else{
            return res.redirect('back');
        }

    }

}    


module.exports.interview = async function(req,res){
    //console.log(req.params.id)
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
        console.log(user)
        return res.redirect('back')

    }
    
   
}