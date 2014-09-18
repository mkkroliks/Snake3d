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