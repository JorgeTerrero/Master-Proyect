const _user = require('../controllers/userController');
const express = require('express');
const {Router} = express;
const app = express();
const router = Router();
const cors = require('cors');


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });



app.get('/api/users' , cors(), _user.GetAllUsers);
app.post('/api/users', cors(),_user.CreateUser);
app.get('/api/users/:email' , cors(), _user.FindUser);
app.put('/api/users/:id' ,cors(), _user.UpdateUser);

//module.exports = router;

module.exports = app;