var express = require("express"),
	router = express.Router(),
	connection = require("../config/sql.js");

router.get("/xiangqingye",function(req,res){
	res.render("xiangqing");
})
module.exports = router