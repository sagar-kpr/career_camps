const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error while connecting db'));

db.once('open', function(){
    console.log('student db connected to database');
})

const mongodb = require("mongodb").MongoClient;

let url = process.env.MONGODB_URL;
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

