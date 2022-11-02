const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error while connecting db'));

db.once('open', function(){
    console.log('student db connected to database');
})

