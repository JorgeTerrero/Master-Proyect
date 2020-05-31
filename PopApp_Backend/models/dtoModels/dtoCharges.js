const mongoose = require('mongoose');
const {Schema} = mongoose;
const products = require('./dtoProducts');

const charge = new Schema({
    chargeId: {type:Schema.Types.ObjectId , required: true},
    products: [products],
    check: {type: Boolean , default: false}
});

module.exports = charge;