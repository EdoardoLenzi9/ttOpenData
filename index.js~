/*var express = require('express');
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

*/

/*globals require, console, process */

//express
var express = require('express');
var bodyParser = require('body-parser');
//inspect variables
var util = require('util');

//instantiate express
var app = express();
const hostname = '127.0.0.1';
const port = (process.env.PORT || 80);

/* Configure express app to use bodyParser()
 * to parse body as URL encoded data
 * (this is how browser POST form data)
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//handle get req on /sum
app.get('/sum', function (req, res) {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //process
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    var sum = x + y;
    
    //write response
    res.write('?x: ' + x + '\n');
    res.write('?y: ' + y + '\n');
    res.write('sum: ' + sum + '\n');
    //send response
    res.end();
});

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


//handle get req on /sum
app.get('/multiply', function (req, res) {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //process
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    var multiply = x * y;
    
    //write response
    res.write('?x: ' + x + '\n');
    res.write('?y: ' + y + '\n');
    res.write('multiply: ' + multiply + '\n');
    //send response
    res.end();
});


//handle post req on /
app.post('/sum', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //process
    var x = parseFloat(req.body.x);
    var y = parseFloat(req.body.y);
    var sum = x + y;
    
    //write response
    res.write('?x: ' + x + '\n');
    res.write('?y: ' + y + '\n');
    res.write('sum: ' + sum + '\n');
    res.write('\npolenta e crauti\n');
    //send response
    res.end();
    
});


//handle post req on /
app.post('/multiply', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //process
    var x = parseFloat(req.body.x);
    var y = parseFloat(req.body.y);
    var multiply = x * y;
    
    //write response
    res.write('\npolenta e crauti\n');
    res.write('?x: ' + x + '\n');
    res.write('?y: ' + y + '\n');
    res.write('multiply: ' + multiply + '\n');
    res.write('polenta e crauti');
    //send response
    res.end();
    
});


//listen in a specific port
app.listen(process.env.PORT || 80);

//check status
console.log('Server running at http://localhost:80/');
