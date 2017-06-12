var express = require("express"),
	router = express.Router(),
	connection = require("../config/sql.js")
router.post("/postzhuce",function(req,res){
	var user = req.body.user;
	connection.query('insert into news(title) values("'+user+'")',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send({cout:0,data:result})
		}else{
			res.send({cout:1,data:result})
		}
	})
})
module.exports = router;