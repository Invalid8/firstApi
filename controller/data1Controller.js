const Data = require("../model/data");
const dataType = require("../model/dataType");

const getAllData = (req, res) => {
	res.json(Data.data[dataType.value]);
};

module.exports = { getAllData };
