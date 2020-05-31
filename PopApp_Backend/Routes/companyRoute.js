const express = require('express');
const {Router} = express;
const router = Router();
const {GetAllCompany , FindCompanyByCode , CreateCompany , UpdateCompany , DeleteCompany} = require('../controllers/companyController');

router.get('/api/company' , GetAllCompany);
router.get('/api/company/:code' , FindCompanyByCode);
router.post('/api/company' , CreateCompany);
router.put('/api/company/:id' , UpdateCompany);
router.delete('/api/company/:id' , DeleteCompany);

module.exports = router;