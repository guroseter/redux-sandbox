
var express = require('express');
var app = express();
var path = require('path');

var port = 9000;

app.use(express.static(__dirname));

app.listen(port, function() {
    console.log('The tasks server has been started on port ' + port);
});
