var express = require('express');
var app = express();

var urbanService = require('./Services/urbanService.js');
var extraurbanService = require('./Services/extraurbanService.js');

app.get('/urban/getRoutesNames', function(req, res) {
          urbanService.getRoutes().then(function(value) {
            res.send(value);
          });
        });

app.get('/urban/getRoutes', function(req, res) {
          urbanService.getRoutes().then(function(value) {
            res.send(value);
          });
        });

//app.listen(3001);
app.listen(process.env.PORT || 80);
console.log('Listening on port 3001...');


