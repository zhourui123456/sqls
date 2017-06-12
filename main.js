const express = require('express'),
	ejs = require('ejs'),
	app = express(),
	bodyparser = require('body-parser');

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/js'));
require('./config/config.js')(app);
app.listen(8888,function(){
	console.log('listen is prop 8888...')
});


