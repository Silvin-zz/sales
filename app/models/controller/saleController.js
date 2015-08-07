var express       = require('express');        // call express
var bodyParser    = require('body-parser');
var router        = express.Router();          // get an instance of the express Router
var Sale          = require('../entity/sale');
var Product       = require('../entity/product');

router.post('/', function(req, res) {

    
    //console.log(req.body);

    var detail             = [];
    var saleObject          = new Sale();
    saleObject.subtotal     = req.body.title;
    saleObject.tax          = req.body.tax;
    saleObject.total        = req.body.total;
    saleObject.discount     = req.body.discount;
    var product             = null;
    //Recorremos todos los productos que integran la venta y obtenemos los datos del producto.
    for(var a = 0; a < req.body.detail.length; a++){
        var productDetail   = {};
        product             = req.body.detail[a];
        Product.findById(product.product_id, function(err, productObject){
            bandera=req.body.detail.length==a+1?true:false;
            productDetail.count     = product.count;
            productDetail.price     = productObject.price;
            productDetail.title     = productObject.title;
            productDetail._id       = productObject._id;
            detail.push(productDetail);
            console.log(productDetail);
            console.log(detail);
        });
    }
    console.log("==========================");
    console.log(detail);
    saleObject.detail       = detail;


    saleObject.save(function(err){
        if(err)
            res.send(err);
        res.json(saleObject);
    });
});


router.get('/', function(req, res){
    Sale.find({}, function(err,  sales){
        res.send(sales);
    });
});


module.exports              = router;



