const buqueModel = require('../models/buque');
const _buque = {};


_buque.GetAllBuque = async (req , res) => {
    try {

        const buque = await buqueModel.find();
        res.json({
            ok: true,
            buque
        })
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }
}
_buque.FindBuqueByImo = async (req , res) => {
    try {

        const imo = req.params.imo;
        const buque = await buqueModel.findOne({imo: imo});

        res.json({
            ok: true,
            buque
        })
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }
}
_buque.CreateBuque = async (req , res) => {
    try {

        let body = req.body;

        const buque = new buqueModel({
            
            name: body.name,
            code: body.code,
            imo: body.imo,
            flag: body.flag,
            slora: body.slora,
            arrival: body.arrival

        });

        await buque.save();

        res.json({
             ok: true,
             message: 'Buque Was Created'
        });
        
    } catch (err) {
        res.status(400).json({
             ok:false,
             err
        });
    }
}
_buque.UpdateBuque = async (req , res) => {
    try {

        let body = req.body;
        let _id = req.params.id;

        const buque =  {
            
            name: body.name,
            code: body.code,
            imo: body.imo,
            flag: body.flag,
            slora: body.slora,
            arrival: body.arrival

        };

        await buqueModel.findByIdAndUpdate(_id, buque , {new: true});

        res.json({
            ok: true,
            message: 'Buque Was Updated'
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }
}
_buque.DeleteBuque = async (req , res) => {
    try {

        let body = req.body;
        let _id = req.params.id;

        body.status = false;

        await buqueModel.findByIdAndUpdate(_id , body , {new: true});

        res.json({
            ok: true ,
            message: 'Buque Was Deleted'
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }
}

module.exports = _buque;
