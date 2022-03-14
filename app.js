const express = require("express");
const connectDB = require("./backend/config/db");
const bodyParser = require("body-parser");
const Goals = require("./backend/models/Goals");

const app = express();

connectDB();

app.use(bodyParser.json());

//Adding a new record to MongoDB
app.post("/goals", (req, res) => {
  const newGoal = new Goals({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
    createdAt: req.body.createdAt,
  });
  newGoal.save().then((goal) => res.json(goal));
});

//Retrieving all records from MongoDB
app.get("/goals", (req, res) => {
  const goals = Goals.find().then((goals) => res.json(goals));
});

//How do we start listening to the server?
app.listen(3000);
