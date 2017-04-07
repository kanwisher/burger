const connection = require('./connection.js');

const orm = {

	selectAll : function(table, cb){
		connection.query("SELECT * FROM ??",[table], function(err, result) {
			if (err) throw err;
			cb(result); //once query has successfully completed, return the result with our callback
		});
	},

	insertOne : function(){

	},

	updateOne : function(){

	}
};


module.exports = orm;