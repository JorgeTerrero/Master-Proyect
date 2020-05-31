const express = require('express');
const {Router} = express;
const router = Router();
const {GetAllBuque , FindBuqueByImo , CreateBuque , UpdateBuque , DeleteBuque} = require('../controllers/buqueController');


router.get('/api/buque' , GetAllBuque);
router.post('/api/buque' , CreateBuque);
router.get('/api/buque/:imo' , FindBuqueByImo);
router.put('/api/buque/:id' , UpdateBuque);
router.delete('/api/buque/:id', DeleteBuque);


module.exports = router;