var express     = require('express');               // call express
var app         = express();                        // define our app using express
var bodyParser  = require('body-parser');

var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sales'); // connect to our database

var port        = process.env.PORT || 8080;
var entities    = require('./app/models/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/entity/users'     , entities.user);
app.use('/api/entity/products'  , entities.product);




app.listen(port);
console.log('Magic happens on port ' + port);
