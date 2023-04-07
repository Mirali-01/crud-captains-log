// Initialize and require dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
// Put model here
const app = express();
const PORT = 3000;

// Set up View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// middleware
app.use(express.urlencoded({ extended: false }));

// [NEW]
app.get("/new", (req, res) => {
  res.render("New");
});

// [POST] --> Create
app.post("/logs", (req, res) => {
  req.body.shipIsBroken === "on"
    ? (req.body.shipIsBroken = true)
    : (req.body.shipIsBroken = false);
  res.send(req.body);
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
