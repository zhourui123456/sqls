var mysql = require("mysql"),
	connection = mysql.createConnection({
		'host': 'localhost',
		'user': 'root',
		'password': '9000',
		'database': 'zhourui'
	})
connection.connect()
module.exports = connection