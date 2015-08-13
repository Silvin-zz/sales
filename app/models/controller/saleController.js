var express       = require('express');        // call express
var bodyParser    = require('body-parser');
var router        = express.Router();          // get an instance of the express Router
var Sale          = require('../entity/sale');
var Product       = require('../entity/product');

router.post('/', function(req, res) {

    
    //console.log(req.body);

    var detail             = [];
    var saleObject          = new Sale();
    saleObject.subtotal     = req.body.subtotal;
    saleObject.tax          = req.body.tax;
    saleObject.total        = req.body.total;
    saleObject.discount     = req.body.discount;
    var tmpProducts         = req.body.detail;
    var productIds          = [];
    console.log(tmpProducts);

    //Recorremos todos los productos que integran la venta y obtenemos los datos del producto.
    for(var a = 0; a < tmpProducts.length; a++){
        productIds.push(tmpProducts[a]._id);
    }
    console.log(productIds);

    //Buscamos los productos para la venta.
    Product.find({"_id": {$in: productIds }}, function(err, products){
        
        for( a = 0; a < products.length; a++ ){

            var productDetail   = {};
            productDetail.count = tmpProducts[a].count;
            productDetail.cost  = products[a].cost;
            productDetail.title = products[a].title;
            productDetail._id   = products[a]._id;
            detail.push(productDetail);

        } 
        console.log(detail);

        saleObject.detail       =detail;
        saleObject.save(function(err){
            if(err)
                res.send(err);
            res.json(saleObject);
        });

    });
    
});


router.get('/', function(req, res){
    Sale.find({}, function(err,  sales){
        res.send(sales);
    });
});


module.exports              = router;



