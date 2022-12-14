const User = require('../models/schema');
const StudentBasic = require('../models/student_basic_schema');

//rendring the login page
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('login')

}

//create session for login user and give them access to home page
module.exports.session =  function(req,res){
    req.flash('success', "Login successfully ");
    return res.redirect('/home');

}

// rendring the registration page
module.exports.register = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('register')
}

//for creating a new user in database
module.exports.createUser = function(req,res){
    if(req.body.password != req.body.confirmpass){
        return res.redirect('back');
    }
   
    User.findOne({userId:req.body.userId}, function(err,user) {
        if(err) { console.log('err in finding id'); return }
        if(!user){
            User.create(req.body , function(err,user) {
                if(err) { console.log('err in creating',err); return }
                req.flash('success', 'Registered successfully');
                return res.redirect('/');
            });
                
        } else {
            req.flash('error', 'Already Registered');
            return res.redirect('back');
        }
    })
}

//rendering home page
module.exports.home = async function(req,res){
    let post = await StudentBasic.find({});

    return res.render('home',{
        lists: post
    })

}

//destroy session
module.exports.destroy = function(req,res){
    req.logout(function(err){
        if(err) { console.log('err in logout', err); return }
        req.flash('success', "Logout successfully ");
        return res.redirect('/')
    });
}



