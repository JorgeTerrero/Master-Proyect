const express = require('express');
const {Router} = express;
const router = Router();
const {GetAllSchedule , CreateSchedule} = require('../controllers/schedukeController');

router.get('/api/schedule' , GetAllSchedule);
router.post('/api/schedule', CreateSchedule);

module.exports = router;