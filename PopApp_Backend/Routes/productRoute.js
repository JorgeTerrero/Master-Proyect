const express = require('express');
const {Router} = express;
const router = Router();
const {GetAllProduct , FindProductByName , FindProductById , CreateProduct , UpdateProduct ,DeleteProduct} = require('../controllers/productController');

router.get('/api/product' , GetAllProduct);
router.get('/api/product/:name', FindProductByName);
router.get('/api/products/:id' , FindProductById);
router.post('/api/product' , CreateProduct);
router.put('/api/product/:id' , UpdateProduct);
router.delete('/api/product/:id' , DeleteProduct);

module.exports = router;