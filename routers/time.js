var express = require("express"),
router = express.Router(),
connection = require("../config/sql.js");
router.post("/time",function(req,res){
	var p = req.body.p,
		time = req.body.times;

	connection.query('update news set Time="'+time+'" where NO="'+p+'"');

})
module.exports = router;