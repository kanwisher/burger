const mysql = require('mysql');
const connection = mysql.createPool({
	host : 'us-cdbr-iron-east-03.cleardb.net',
	user : 'bd9433bd4be5b7',
	password : '06e640c3',
	database: 'heroku_b92601014a85b80'
});

connection.getConnection(function(err, connection) { //trying pools since app keeps crashing
	if (err) throw err;
});

module.exports = connection; //allow other documents to access this connection