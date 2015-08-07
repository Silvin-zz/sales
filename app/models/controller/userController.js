var express     = require('express');        // call express
var bodyParser  = require('body-parser');
var router      = express.Router();          // get an instance of the express Router


// MODELOS //
var User        = require('../entity/user');

router.post('/', function(req, res) {

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


router.put('/:user_id', function(req, res){
    console.log(req.params);
   User.findById(req.params.user_id, function(err, userObject){

        if(err){
            res.send(err);
        }
        userObject.name = req.body.name;
        userObject.save(function(err){
            if(err){
                res.send(err);
            }
            res.json(userObject);

        });
    });
});



router.get('/', function(req, res){
    User.find({}, function(err,  users){
        res.send(users);
    });
});



module.exports = router;



