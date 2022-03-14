const express = require('express');	
const router = express.Router();
const Goals = require('../models/Goals');

router.post('/goals', (req, res) => {

    console.table(req.body);

    const newGoal = new Goals({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        createdAt: req.body.createdAt
    });

    newGoal.save().then(goal => res.json(goal));
})

module.exports = router;