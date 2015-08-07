var express     = require('express');               // call express
var app         = express();                        // define our app using express
var bodyParser  = require('body-parser');

var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sales'); // connect to our database

var port        = process.env.PORT || 8080;
var entities    = require('./app/models/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/entity/user'      , entities.user);
app.use('/api/entity/product'   , entities.product);
app.use('/api/entity/sale'      , entities.sale);




app.listen(port);
console.log('Runing sales app on port ' + port);
