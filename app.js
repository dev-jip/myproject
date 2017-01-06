var express = require('express')
	, fs = require('fs')
	, bodyParser = require('body-parser')
	, handlebars = require('express-handlebars');


var app = express();

//test 1

var hbs = handlebars.create({defaultLayout: 'layout'});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res){
	res.render('index');
});

app.listen(process.env.PORT || 3000);