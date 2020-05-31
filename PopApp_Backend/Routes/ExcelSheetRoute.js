const express = require('express');
const {Router} = express;
const router = Router();
const {ReadExcelSheet} = require('../controllers/ExcelSheetController');
const multer = require('multer');
const path = require('path');
const upload = multer();


router.post('/api/excel' , ReadExcelSheet);

module.exports = router;