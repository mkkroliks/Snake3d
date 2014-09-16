var express = require('express'),
	app = express(),
	port =  process.env.PORT || 5000;

app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.use(express.static(__dirname )); //ustalamy globalna sciezke

var server = app.listen(port, function() {
	console.log('listening on port --> %d', server.address().port);
});

// var app = require('express')(),
// 	port =  process.env.PORT || 5000;

// app.get('/', function(req, res) {
// 	// res.sendFile(__dirname + '/index.html');
// 	res.redirect('/index.html');
// 	// res.sendFile(path.join(__dirname, '../public', 'index1.html'));
// 	// console.log(__dirname + '/index.html');
// });

// app.use(express.static(__dirname + '/public'));

// var server = app.listen(port, function() {
// 	console.log('listening on port --> %d', server.address().port);
// });