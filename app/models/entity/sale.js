//sale.js

var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var saleSchema = new Schema({
    date        : { type: Date, default: Date.now },
    subtotal    : Number,
    tax         : Number,
    total       : Number,
    discount    : Number,
    detail      : []

});


module.exports = mongoose.model('Sale', saleSchema);

