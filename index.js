var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware')

var app = express();
app.use(cookieParser('lethuyy103')); 
app.use(bodyParser.json()); // for parsing application json
app.use(bodyParser.urlencoded({ extended : true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

var port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index', {
		name: "Prometheus"
	});
});

// app.get('/public/styles/custom.css', function (req, res) {
// 	res.send('ABC');
// })

app.use('/users', authMiddleware.requireAuth ,userRoute);
app.use('/auth', authRoute)
app.listen(port, function () {
	// body..
	console.log("Server listening on port ", + port);
});