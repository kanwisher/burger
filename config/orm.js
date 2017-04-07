const connection = require('./connection.js');

const orm = {

	selectAll : function(table, cb){
		connection.query("SELECT * FROM ??",[table], function(err, result) {
			if (err) throw err;
			cb(result); //once query has successfully completed, return the result with our callback
		});
	},

	insertOne : function(table, column, value, cb){
		
		connection.query("INSERT INTO ?? (??) VALUES (?)", [table, column, value], function(err, result) {
			if(err) throw err;
			cb(result);
		});
	},

	updateOne : function(){

	}
};


module.exports = orm;