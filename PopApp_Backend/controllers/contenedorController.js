const contenedorModel = require('../models/contenedor.js');
const _contenedor = {};

_contenedor.GetAllContenedor = async (req , res) =>{

    try {

       container = await contenedorModel.find();
       res.json({
           ok: true,
           container
       });
        
    } catch (err) {
        res.status().json({
            ok: false,
            err
        });
    }

};


_contenedor.FindContenedorById = async (req , res) =>{

    try {

        const type = req.params.type;

        const container = await contenedorModel.findOne({type:type});

        res.json({
               ok: true,
               container
        });
        
        
    } catch (err) {
        res.status().json({
            ok: false,
            err
        });
    }

};


_contenedor.CreateContenedor = async (req , res) =>{

    try {

        const body = req.body;
        const container = new contenedorModel({
            type: body.type,
            payload: body.payload,
            capacity:body.capacity,
            lenght: body.lenght,
            width: body.width,
            height: body.height
        });

        await container.save();

        res.json({
            ok: true,
            message: 'Cotainer was created'
        });

        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};


_contenedor.UpdateContenedor = async (req , res) =>{

    try {

        const _id = req.params.id;
        const body = req.body;
        const container = {
            type: body.type,
            payload: body.payload,
            capacity:body.capacity,
            lenght: body.lenght,
            width: body.width,
            height: body.height
        };

        await contenedorModel.findByIdAndUpdate(_id, container , {new: true});
        res.json({
            ok: true,
            message: 'Container Was updated'
        });
        
        
    } catch (err) {
        res.status().json({
            ok: false,
            err
        });
    }

};


_contenedor.DeleteContenedor = async (req , res) =>{

    try {

        const _id = req.params.id;
        const body = req.body;

        body.status = false;

        await contenedorModel.findByIdAndUpdate(_id , body ,{new: true});

        res.json({
            ok: true,
            message:'Container was Removed'
        });
        
    } catch (err) {
        res.status().json({
            ok: false,
            err
        });
    }

};



module.exports = _contenedor;