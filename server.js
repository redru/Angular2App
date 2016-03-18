// RequireJS
var express = require('express');
var fs = require('fs');

// Application startup
var app = express();

// Route setting
app.get('/node_modules/*.*', function (req, res) {
    res.sendFile(__dirname + req.url);
});

app.use('/smanager', require('./application-routes'));

app.listen(80, function () {
    console.log('Server listening on port 80...');
});
