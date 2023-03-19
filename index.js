const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", require("./router/index.js"));
app.use("/api", require("./router/api/data1.js"));

module.exports = app;
