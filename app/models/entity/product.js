//product.js

var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var productSchema = new Schema({
    title        : String,
    description  : String,
    cost         : Number

});


module.exports = mongoose.model('Product', productSchema);

