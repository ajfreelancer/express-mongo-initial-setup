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
const routes = require("./api/goals.js")
app.get("/api/goals", routes);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the goals API" });
});


const PORT = process.env.PORT || 5050;
//How do we start listening to the server
app.listen(PORT);
