// 连接数据库
const express = require("express"),
	router = express.Router(),
	connection = require("../config/sql.js")
router.post("/postindex",function(req,res){
	connection.query("select * from news",function(err,result){
		if(err){
			throw err;
		}else{
			res.send({cout:0,data:result})
		}
	})
})
module.exports = router