// Initialize and require dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
