"use strict";
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();

app.use(express.static(__dirname + "/public"));

app.use("/", require("./router/index.js"));
app.use("/api", require("./router/api/data1.js"));

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda (express/server.js)

module.exports = app;
module.exports.handler = serverless(app);
