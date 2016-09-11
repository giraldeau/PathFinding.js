var port = process.env['PORT'] || 8080;

var express = require('express');

var main = express();

//Static files
main.use(express.static('visual'));


main.listen(port, function() {
    console.log('We are running on port ' + port);
});

module.exports = require('./src/PathFinding');
