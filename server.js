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

// [SHOW]
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render("Show", {
      log: foundLog,
    });
  });
});

// [POST] --> Create
app.post("/logs", (req, res) => {
  req.body.shipIsBroken === "on"
    ? (req.body.shipIsBroken = true)
    : (req.body.shipIsBroken = false);
  Log.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
    console.log(createdLog);
  });
});

// [DELETE]
app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});

// [EDIT]
app.get("/logs/:id/edit", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    !err
      ? res.render("Edit", {
          log: foundLog,
        })
      : res.send({ msg: err.message });
  });
});

// [PUT]
app.put("/logs/:id", (req, res) => {
  req.body.shipIsBroken === "on"
    ? (req.body.shipIsBroken = true)
    : (req.body.shipIsBroken = false);
  Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
    console.log(updatedLog);
    res.redirect(`/logs/${req.params.id}`);
  });
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
