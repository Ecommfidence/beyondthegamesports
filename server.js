var express = require('express')
// ,stormpath = require('express-stormpath')
// ,mongoose = require('mongoose')
// ,bodyParser = require('body-parser')
,app = express();
// app.set('view engine', 'html');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.sendfile('index.html', {root: __dirname});
});

var server = app.listen(process.env.PORT || 5000);