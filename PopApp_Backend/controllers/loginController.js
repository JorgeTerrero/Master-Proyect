const _loginController = {};
const passport = require('passport');
const _user = require('../models/user');
const bcrypt = require('bcrypt');

_loginController.login = async(req , res , next) =>{
     try {

        passport.authenticate('local', (err , user , info)=>{

            if(err) {
                res.json({
                    ok: false ,
                    err
                });
            }

            req.login(user , err =>{
                   if(err) {
                        res.json({
                            message: 'Username or Password Incorrect'
                        })
                   }
                   res.json({
                       user: user ,
                       session: req.isAuthenticated(),
                   })
            });

            

        } )(req , res , next);


         
     } catch (err) {
        res.status(400).json({
            ok: false ,
            err
        }) 
     }
}

_loginController.logout = async (req , res) =>{
    
    
    const session = req.session;
    req.logout();
    res.json({
       session: session ,
       message: 'you was loggedout'
    });
};

_loginController.home = async (req , res) => {
    try {

    

        const isLogged = req.isAuthenticated();
        const session = req.session;

        res.json({
            ok: true ,
            message: 'working',
            isLogged,
            session
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false ,
            message: 'Dont work'
        });
    }
}

_loginController.LoginTest = async (req , res , next) =>{
      passport.authenticate('local', {
          successRedirect: '/'
      })(req , res , next);
}

module.exports = _loginController;