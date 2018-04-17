const fs = require('fs-extra');
const yargs = require('yargs');
const path = require('path');

var destination = yargs.argv.destination;
if (destination === undefined) {
    console.log('error! destination not defined');
}
else {
    fs.copy(path.join(__dirname, './features'), `${destination}`, err => {
        if(err) {
            console.log(err);
        }
    });
}