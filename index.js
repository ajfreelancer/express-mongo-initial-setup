const express = require("express");
const connectDB = require("./backend/config/db");
const bodyParser = require("body-parser");
const Goals = require("./backend/models/Goals");

const app = express();

connectDB();

app.use(bodyParser.json());

//Adding a new record to MongoDB
const createGoalRoutes = require("./backend/routes/goals");
app.post("/api/goals", createGoalRoutes);

//Retrieving all records from MongoDB
const retrieveGoalRoutes = require("./api/goals.js")
app.get("/api/goals", retrieveGoalRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the goals API" });
});

const PORT = process.env.PORT || 5050;
//How do we start listening to the server
app.listen(PORT);
