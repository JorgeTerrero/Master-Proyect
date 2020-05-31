const express = require('express');
const {Router} = express;
const router = Router();
const _login = require('../controllers/loginController');
const cors = require('cors');

const isLogged = (req , res , next) =>{
    if(req.isAuthenticated()){
        next();
    }

    res.status(400).json({
        message: 'no auth'
    });
}

router.post('/users/login' , cors() , _login.login ); 
router.get('/users/logout' ,  cors() , _login.logout);
router.get('/' , isLogged ,cors() , _login.home);
router.post('/api/login' , cors() ,_login.LoginTest);


module.exports = router;  