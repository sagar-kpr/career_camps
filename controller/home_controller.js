const User = require('../models/schema');

//rendring the login page
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('login')
    /*if(req.cookies.user_id){
        return res.redirect('/home');
    }
    return res.render('login')*/
}

//create session for login user and give them access to home page
module.exports.session = async function(req,res){
    let user = await User.findOne({id:req.body.id});
    if(user){
       if(user.password != req.body.password){
            return res.redirect('back');
       } 
        res.cookie('user_id', user._id)
        return res.redirect('/home');
    }
    return res.redirect('back');
    
    
}

// rendring the registration page
module.exports.register = function(req,res){
    if(req.cookies.user_id){
        return res.redirect('/home');
    }
    return res.render('register')
}

//for creating a new user in database
module.exports.createUser = function(req,res){
    if(req.body.password != req.body.confirmpass){
        return res.redirect('back');
    }
   
    User.findOne({id:req.body.id}, function(err,user) {
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


module.exports.home = async function(req,res){
    let user = await User.findOne({id:req.body.id});

    return res.render('home',{
        user: user
    })
}