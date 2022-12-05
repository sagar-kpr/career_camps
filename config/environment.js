const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');

const logDirectory = path.join(__dirname, '../production_log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path : logDirectory
});


const production = {
    morgan :{
        mode: 'prod',
        option : {stream : accessLogStream}
    }
}

module.exports = production


