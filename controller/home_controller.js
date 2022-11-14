const User = require('../models/schema');

//rendring the login page
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('login')

}

//create session for login user and give them access to home page
module.exports.session =  function(req,res){
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
                if(err) { console.log('err in creating'); return }

                return res.redirect('/');
            });
                
        } else {
            return res.redirect('back');
        }
    })
}

//rendering home page
module.exports.home = async function(req,res){
    let user = await User.findOne({userId:req.body.userId});

    return res.render('home',{
        user: user
    })

}

//destroy session
module.exports.destroy = function(req,res){
    req.logout(function(err){
        if(err) { console.log('err in logout', err); return }
        return res.redirect('/')
    });
}