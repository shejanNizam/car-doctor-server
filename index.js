const express = require("express");
const app = express();
// require mongoDB in here
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 7000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CAR DOCTOR SERVER is running");
});
app.listen(port, () => {
  console.log(`CAR DOCTOR SERVER is running on port ${port}`);
});