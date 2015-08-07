var express     = require('express');        // call express
var app         = express();                 // define our app using express
var bodyParser  = require('body-parser');

var port        = process.env.PORT || 8080;
var router      = express.Router();          // get an instance of the express Router
var mongoose    = require('mongoose');

var User        = require('./app/models/user');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/sales'); // connect to our database

//  INICIAMOS EL RUTEO //


router.post('/users', function(req, res) {

    var userObject      = new User();
    userObject.name     = req.body.name;
    userObject.username = req.body.username;
    userObject.password = req.body.password;
    userObject.save(function(err){

        if(err)
            res.send(err);
        res.json(userObject);
    });

});


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
