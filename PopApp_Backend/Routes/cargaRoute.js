const express = require('express');
const {Router} = express;
const router = Router();
const {GetAllCargas , FindCargasByCodigo , CreateCargas , UpadateCargas , DeleteCargas} = require('../controllers/cargaController');

router.get('/api/carga', GetAllCargas);
router.get('/api/carga/:codigo' , FindCargasByCodigo);
router.post('/api/carga' , CreateCargas);
router.put('/api/carga/:id' , UpadateCargas);
router.delete('/api/carga/:id' , DeleteCargas);

module.exports = router;