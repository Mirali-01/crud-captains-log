// Initialize and require dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Log = require("./models/logs");
// Put model here
const app = express();
const PORT = 3000;

// Set up View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// [SEED]
app.get("/logs/seed", (req, res) => {
  Log.create(
    {
      title: "Kirk",
      entry: "entering the degaba system",
      shipIsBroken: false,
    },
    (err, data) => {
      res.redirect("/logs/new");
    }
  );
});

// [INDEX]
app.get("/logs", (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render("Index", {
      logs: allLogs,
    });
  });
});

// [NEW]
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// [POST] --> Create
app.post("/logs", (req, res) => {
  req.body.shipIsBroken === "on"
    ? (req.body.shipIsBroken = true)
    : (req.body.shipIsBroken = false);
  res.send(req.body);
  res.redirect("Show");
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
