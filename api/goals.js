const express = require("express");
const router = express.Router();
const Goals = require("../backend/models/Goals");


// For retrieving all records
router.get("/", (req, res) => {
  const goals = Goals.find().then((goals) => res.json(goals));
});

// For adding a record
router.post("/", (req, res) => {
  console.table(req.body);

  const newGoal = new Goals({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
    createdAt: req.body.createdAt,
  });

  newGoal.save()
    .then((goal) => res.json(goal))
    .catch((err) => console.log(err));
});

//For find a record by id
router.get("/:postid", (req, res) => {
  Goals.findById(req.params.postid)
    .then( g => res.json(g))
    .catch(err => res.json(err));
})

//For deleting a record
router.delete("/:postid", (req, res) => {
  Goals.remove({_id: req.params.postid})
    .then(() => res.json({success: true}))
    .catch(err => res.json(err));
});

//For updating a record

router.patch('/:postId', (req, res) => {
  Goals.updateOne({_id: req.params.postId}, {$set: {completed: req.body.completed}})
    .then(updatedGoal => res.json(updatedGoal))
})

module.exports = router;
