const mongoose = require('mongoose');
const {Schema} = mongoose;
const charges = require('./dtoCharges');

const container = new Schema({
    containerId: {type: Schema.Types.ObjectId , required: true},
    companyId:{type:Schema.Types.ObjectId , required: true},
    process: {type: String , required: true},
    charge:[charges],
    check: {type:Boolean , default: false}

});

module.exports = container;