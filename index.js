const express = require("express");
const connectDB = require("./backend/config/db");
const bodyParser = require("body-parser");
const Goals = require("./backend/models/Goals");

const app = express();

connectDB();

app.use(bodyParser.json());

const retrieveGoalRoutes = require("./api/goals.js")
app.use("/api/goals", retrieveGoalRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
})

const PORT = process.env.PORT || 5050;
app.listen(PORT);
