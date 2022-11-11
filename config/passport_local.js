const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User  = require('../models/schema');


passport.use(new LocalStrategy({
    usernameField: 'id'
}, async function(userId, password, done){
    let user = await User.findOne({id: userId});

    if(user){
        if(user.password != password){
            return done(null, false)
        }
        return done(null, user)
    }

    return done(null, false)
}));


passport.serializeUser(function(user,done){
    return done(null, user.id);
});

passport.deserializeUser( async function(id, done){
    let user = await User.findById(id);

    if(user){
        return done(null, user);
    }
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
