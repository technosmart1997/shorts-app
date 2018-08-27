const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mean'
});

connection.connect(function(err, connect){
	if(err){
		console.log(err);
	}else{
		console.log('connected to database');
	}
});


module.exports = connection;