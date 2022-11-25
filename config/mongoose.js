const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/studentDB');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error while connecting db'));

db.once('open', function(){
    console.log('student db connected to database');
})

const mongodb = require("mongodb").MongoClient;

let url = "mongodb://localhost/studentDB";
const fastcsv = require('fast-csv')
const fs = require('fs');
const ws = fs.createWriteStream('student.csv');

mongodb.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) throw err;

    client
      .db('studentDB')
      .collection("studentbasics")
      .find({})
      .toArray((err, data) => {
        if (err) throw err;

        console.log('eww',data);
        
        // TODO: write data to CSV file
        fastcsv
          .write(data, { headers: true })
          .on("finish", function() {
            console.log("Write to student.csv successfully!");
          })
          .pipe(ws);

        client.close();
      });
  }
);

