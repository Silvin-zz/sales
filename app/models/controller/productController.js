var express     = require('express');        // call express
var bodyParser  = require('body-parser');
var router      = express.Router();          // get an instance of the express Router


// MODELOS //
var Product     = require('../entity/product');

router.post('/', function(req, res) {

    var productObject          = new Product();
    productObject.title        = req.body.title;
    productObject.description  = req.body.description;
    productObject.cost         = req.body.cost;
    productObject.save(function(err){

        if(err)
            res.send(err);
        res.json(productObject);
    });

});


router.get('/', function(req, res){
    Product.find({}, function(err,  products){
        res.send(products);
    });
});

module.exports = router;



