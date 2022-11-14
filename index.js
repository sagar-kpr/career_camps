const express = require('express');
//const cookieParser = require('cookie-parser');
const port = 3000;
const db = require('./config/mongoose');
const MySession = require('express-session'); 
const passport = require('passport');
const PassportLocal = require('./config/passport_local');
const app = express();
const parser = require('body-parser');
const sassMiddlware = require('node-sass-middleware');
const expressLayout = require('express-ejs-layouts');
const path = require('path');



app.use(sassMiddlware({
    src: path.join(__dirname, './assets','sass'),
    dest :path.join(__dirname, './assets', 'css'),
    outputStyle: 'expanded',
    prefix: '/css'
}));
//app.use(cookieParser());
app.use(parser.urlencoded({extended: false}));
app.use(express.static('./assets'));
app.use(expressLayout);

app.set('view engine', 'ejs');
app.set('views', './view');
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);

app.use(MySession({
    name: 'placement',
    secret : 'placement',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//use router
app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if(err) { console.log('err in listening',err); return }
    console.log('server is running...');
});



