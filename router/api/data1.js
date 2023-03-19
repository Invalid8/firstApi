const express = require("express");
const { getAllData } = require("../../controller/data1Controller");
const dataType = require("../../model/dataType");
const router = express.Router();

router.get("/TopProducts", (req, res, next) => {
	dataType.setDataType("TopProducts");
	res.set("Access-Control-Allow-Origin", "*");
	getAllData(req, res);
	next();
});

router.get("/services", (req, res, next) => {
	dataType.setDataType("services");
	res.set("Access-Control-Allow-Origin", "*");
	getAllData(req, res);
	next();
});

router.get("/sGallery", (req, res, next) => {
	dataType.setDataType("sGallery");
	res.set("Access-Control-Allow-Origin", "*");
	getAllData(req, res);
	next();
});

module.exports = router;
