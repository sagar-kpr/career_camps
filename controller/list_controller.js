const StudentBasic = require('../models/student_basic_schema');
const User = require('../models/schema');



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