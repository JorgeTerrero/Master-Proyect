const express = require('express');
const {Router} = express;
const router = Router();
const {GetAllContenedor , FindContenedorById , CreateContenedor , UpdateContenedor , DeleteContenedor} = require('../controllers/contenedorController');

router.get('/api/container' , GetAllContenedor);
router.get('/api/container/:type' , FindContenedorById);
router.post('/api/container' , CreateContenedor);
router.put('/api/container/:id' , UpdateContenedor);
router.delete('/api/container/:id' , DeleteContenedor);

module.exports = router;
