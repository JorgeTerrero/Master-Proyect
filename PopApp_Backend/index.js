const express = require('express');
const app = express();
const {mongoose} = require('./mongooseDb');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const upload = require('express-fileupload');

//import passport config
require('./configs/passport-config')(passport)

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//app.use(upload());




//express-session
app.use(session({
    secret: 'topSecret',
    resave: true,
    saveUninitialized: true
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//imports
app.use(require('./utils/import'));

app.listen(3000 , err =>{

    if(err) throw err;

    console.log('LISTEN ON PORT 3000');

});