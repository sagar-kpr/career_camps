const express = require('express');
//const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const env = require('./config/environment');
const db = require('./config/mongoose');
const MySession = require('express-session'); 
const mongostore = require('connect-mongo');
const passport = require('passport');

const PassportLocal = require('./config/passport_local');
const app = express();
const logger = require('morgan');
const parser = require('body-parser');
const flash = require('connect-flash');
const customMiddlware = require('./config/middleware');
const sassMiddlware = require('node-sass-middleware');
const expressLayout = require('express-ejs-layouts');
const path = require('path');



app.use(logger(env.morgan.mode, env.morgan.option));

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
    },
    store : mongostore.create({
        mongoUrl :process.env.MONGODB_URL, // 'mongodb://localhost/students'
        autoRemove: 'disabled'
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//use flash
app.use(flash());
app.use(customMiddlware.setflash);

//use router
app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if(err) { console.log('err in listening',err); return }
    console.log('server is running...');
});



