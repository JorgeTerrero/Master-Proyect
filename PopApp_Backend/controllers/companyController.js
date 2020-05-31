const companyModel = require('../models/company');
const _company = {};

_company.GetAllCompany = async (req , res) =>{

    try {

        const company = await companyModel.find();
        res.json({
            ok: true,
            company
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};

_company.FindCompanyByCode = async (req , res) =>{

    try {
        const code = req.params.code;
        const company = await companyModel.findOne({code: code});
        res.json({
            ok: true,
            company
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};

_company.CreateCompany = async (req , res) =>{

    try {

        const body = req.body;
        const company = new companyModel({
            name: body.name,
            code:body.code,
            adress:body.adress,
            phone:body.phone
        });

        await company.save();
        res.json({
            ok: true,
            message: 'Company was Created'
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};

_company.UpdateCompany = async (req , res) =>{

    try {

        const _id = req.params.id;
        const body = req.body;
        const company = {
            name: body.name,
            code:body.code,
            adress:body.adress,
            phone:body.phone
        };

        await companyModel.findByIdAndUpdate(_id ,company , {new: true});

        res.json({
            ok: true,
            message: 'Company was Updated'
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};

_company.DeleteCompany = async (req , res) =>{

    try {
        const _id = req.params.id;
        const body = req.body;
        body.status = false;
        await companyModel.findByIdAndUpdate(_id , body , {new: true});
        res.json({
            ok: true,
            message: 'Company was Deleted'
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};

module.exports = _company;