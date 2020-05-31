const mongoose = require('mongoose');
const {Schema} = mongoose;

const cargaSchema = new Schema({

    codigo: {type: String , required: true},
    descripcion: {type: String , required: true},
    tipoDeCarga:{type: String , required: true},
    peso: {type: Number , required: true},
    status:{ type: Boolean , default: true},
    

});

module.exports = mongoose.model('Cargas' , cargaSchema);