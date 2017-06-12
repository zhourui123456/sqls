// 默认路由
const express = require('express'),
	router = express.Router();

router.get('/',function(req,res){
	res.render('index');
})
module.exports = router;