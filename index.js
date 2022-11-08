const express = require('express');
const port = 5000;
const db = require('./config/mongoose');
const app = express();
const parser = require('body-parser');
const sassMiddlware = require('node-sass-middleware');
const expressLayout = require('express-ejs-layouts');
const path = require('path');



app.use(sassMiddlware({
    src: path.join(__dirname, './assets', 'scss'),
    dest :path.join(__dirname, './assets', 'css'),
    outputStyle: 'expanded',
    prefix: '/css'
}));

app.use(parser.urlencoded({extended: false}));
app.use(express.static('./assets'));
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('views', './view');
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);




//use router
app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if(err) { console.log('err in listening',err); return }
    console.log('server is running...');
});



