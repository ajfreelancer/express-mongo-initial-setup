const express = require("express");
const router = express.Router();
const Goals = require("../backend/models/Goals");

router.get("/api/goals", (req, res) => {
  console.log("get request for all goals");
  const goals = Goals.find().then((goals) => res.json(goals));
});

module.exports = router;
