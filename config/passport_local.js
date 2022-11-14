const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User  = require('../models/schema');


passport.use(new LocalStrategy(
    {
        usernameField: 'id'
    },
    function(id, password, done){
        User.findOne({id:id}, function(err,user){
            if(err) { 
                return done(err) 
            }
            if(user){
                if(user.password != password){
                    return done(null, false);
                }else{
                    return done(null, user);
                }
            }else{
                return done(null, false);
            }

        });

    }
));


passport.serializeUser(function(user,done){
    return done(null, user.id);
});

passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        if(err) { return done(err) }
        
        return done(null,user);
    });
});




passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/')
}


passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user
        
    }
    return next();
}

module.exports = passport;
