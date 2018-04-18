const fs = require('fs-extra');
const yargs = require('yargs');
const path = require('path');

var destination = yargs.argv.destination;

if (destination === undefined) {
    console.log('No destination present in command-line arguments! Please provide the --destination tag');
}

else {
    fs.copy(path.join(__dirname, './src'), `${destination}`, err => {
        if(err) {
            console.log('Something went wrong: ');
            console.log(err);
        }
    });
}