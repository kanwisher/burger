const mysql = require('mysql');
const connection = mysql.createConnection({
	host : 'us-cdbr-iron-east-03.cleardb.net',
	user : 'bd9433bd4be5b7',
	password : '06e640c3',
	database: 'heroku_b92601014a85b80'
});

connection.connect(function(err) { //initial connection to app
	if(err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection; //allow other documents to access this connection