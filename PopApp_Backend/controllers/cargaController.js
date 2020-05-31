const cargaModel = require('../models/carga');
const _carga = {};

_carga.GetAllCargas = async (req , res) =>{
      try {

        const carga = await cargaModel.find();

        res.json({
            ok: true,
            carga
        });
          
      } catch (err) {
          res.status(400).json({
              ok: false ,
              err
          });
      }
};

_carga.FindCargasByCodigo = async (req , res) =>{
    try {

        const codigo = req.params.codigo;
        const carga = await cargaModel.findOne({codigo: codigo});
        res.json({
            ok: true,
            carga
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false ,
            err
        });
    }
};

_carga.CreateCargas = async (req , res) =>{
    try {

        const body = req.body;
        const carga = new cargaModel({

            codigo: body.codigo,
            descripcion: body.descripcion,
            tipoDeCarga:body.tipoDeCarga,
            peso: body.peso,
           
            
        });

        await carga.save();

        res.json({
            ok: true ,
            message: 'Carga Was Created'
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false ,
            err
        });
    }
};

_carga.UpadateCargas = async (req , res) =>{
    try {
        const _id = req.params.id;
        const body = req.body;
        const carga={

            codigo: body.codigo,
            descripcion: body.descripcion,
            tipoDeCarga:body.tipoDeCarga,
            peso: body.peso
           
            
        };

        await cargaModel.findByIdAndUpdate(_id , carga , {new: true});
        res.json({
            ok: true,
            message: 'Carga was Updated'
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false ,
            err
        });
    }
};

_carga.DeleteCargas = async (req , res) =>{
    try {
        const _id = req.params.id;
        const body = req.body;
        body.status = false;
        await cargaModel.findByIdAndUpdate(_id , body , {new: true});
        
    } catch (err) {
        res.status(400).json({
            ok: false ,
            err
        });
    }
};

module.exports = _carga;