const mysql = require('mysql');
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database: 'burgers_db'
});

connection.connect(function(err) { //initial connection to app
	if(err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection; //allow other documents to access this connection