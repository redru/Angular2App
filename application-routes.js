// Constants definitions
const APP_PATH = __dirname + '/app';

// RequireJS
var express = require('express');
var fs = require('fs');

// Router start
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', new Date());
    next();
});

// Route mappings
router.get('/*.*', function(req, res) {
    res.sendFile(APP_PATH + req.url);
});

router.get('/*', function(req, res) {
    res.sendFile(APP_PATH + req.url + '.js');
});

module.exports = router;
