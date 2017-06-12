const index = require("../routers/index.js"), // 主路由
	  postindex = require("../routers/postindex.js"), // 连接数据库渲染数据
	  zhuce = require("../routers/zhuce.js"), // 注册页面路由
	  postzhuce = require("../routers/postzhuce.js"), // 注册渲染路由
	  xiangqing = require("../routers/xiangqing.js"),
	  xiangqingye = require("../routers/xiangqingye.js") 
	  time = require("../routers/time.js") 

module.exports = function(app) {
	app.get("/", index);
	app.get("/zhuce", zhuce);
	app.get("/xiangqingye", xiangqingye);
	app.post("/postindex", postindex);
	app.post("/postzhuce", postzhuce);
	app.post("/xiangqing", xiangqing);
	app.post("/time", time);
}