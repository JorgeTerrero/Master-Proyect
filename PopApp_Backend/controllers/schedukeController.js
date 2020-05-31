const scheduleModel = require('../models/schedule');
const _schedule = {};

_schedule.GetAllSchedule = async (req , res) =>{

    try {

        const schedule = await scheduleModel.find();

        res.json({
            ok: true ,
            schedule
        })
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};

_schedule.CreateSchedule = async (req , res) =>{

    try {

        const body = req.body;
        const schedule = new scheduleModel({
            buqueId: body.buqueId,
            date: body.date,
            containers: body.containers,
            status: body.status
        });

        await schedule.save();
       

        res.json({
            ok: true,
            message: 'Schedule was Created'
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false,
            err
        });
    }

};

module.exports = _schedule;