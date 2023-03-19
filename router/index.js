const express = require("express");
const Data = require("../model/data");
const router = express.Router();

router.get("/", (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	res.json(Data.data);
});

module.exports = router;
