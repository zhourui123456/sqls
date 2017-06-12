var express = require("express"),
	router = express.Router(),
	connection = require("../config/sql.js");
router.post("/xiangqing",function(req,res){
	var p = req.body.p;

	connection.query('select * from news where NO="'+p+'"',function(err,result){
		if(err) throw err;
		if(result.length > 0){
			res.send({cout: 0,data: result});
		}else{
			res.send({cout: 1});
		}
	})
})
module.exports = router;