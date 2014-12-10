var express = require('express')
// ,stormpath = require('express-stormpath')
// ,mongoose = require('mongoose')
// ,bodyParser = require('body-parser')
,app = express();
// app.set('view engine', 'html');

app.get('/', function(req, res) {
	res.sendfile('BTG-Holding-Page.jpg', {root: __dirname});
});

var server = app.listen(process.env.PORT || 5000);