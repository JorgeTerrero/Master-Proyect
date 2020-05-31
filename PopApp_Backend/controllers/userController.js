const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const saltCount = 10;
const _user = {};

_user.GetAllUsers = async (req , res) =>{
    try {

        let userDB = await userModel.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.json({
            ok: true ,
            Users: userDB
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false ,
            err
        });
    }
};
_user.CreateUser = async (req , res) =>{
    try {

        let body = req.body;

        let bcryptPassword  = body.passwordHalt;

        bcrypt.hash(bcryptPassword , saltCount , async (err , hash) =>{
           let user = new userModel({
            username: body.username,
            email: body.email,
            passwordHalt: bcryptPassword,
            passwordSalt: hash,
            role: body.role,
            token: body.token,
            image: body.image,
           });

           await user.save();

           res.json({
               ok: true ,
               Message: "The User Was Created"
           }); 

        });
        
    } catch (err) {
        res.status(400).json({
           ok: false ,
           err
        });
    }
};
_user.FindUser = async (req , res) =>{

    try {

        let email = req.params.email;
        let user = await userModel.findOne({email:email});

        res.json(user);
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};
_user.UpdateUser = async (req , res) =>{
    try {
        let _id = req.params.id;
        let body = req.body;

        let bcryptPassword  = body.passwordHalt;

        bcrypt.hash(bcryptPassword , saltCount , async (err , hash) =>{

           let user = {
            username: body.username,
            email: body.email,
            passwordHalt: bcryptPassword,
            passwordSalt: hash,
            role: body.role,
            token: body.token,
            image: body.image,
           };

            await userModel.findOneAndUpdate(_id , user , {new: true}); 

           

           res.json({
               ok: true ,
               Message: "The User Was Updated"
           }); 

        });


       
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }
};
_user.DeleteUser = async (req , res) =>{
    try {

        let _id = req.params.id;
        let body = req.body;

        body.status = false;

        await userModel.findByIdAndUpdate(_id , body , {new: true});

        res.json({
            ok: true ,
            Message: "The User Was Removed"
        })

        
    } catch (err) {
        res.status(400).json({
            ok: false ,
            err
        });
    }
};


module.exports = _user;