const con = require('../database/config');
const bcrypt = require('./bcrypt');

// CREATING A USER FUNCTION

var db = {};

module.exports.createUser = function(user,callback){

		bcrypt.createHash(user.password, function(err, hash){
			let cmd = "insert into users (name, username, email, password) values ('"+user.name+"','"+user.username+"','"+user.email+"','"+hash+"')";
			con.query(cmd, callback);	
		});
}

module.exports.findUserByUsername = function(username,callback){

		let cmd = "select * from users where username = '"+ username +"'";
		con.query(cmd, callback);
}

module.exports.findUserById = function(id,callback){
		
		let cmd = "select * from users where user_id = '"+ id +"'";
		con.query(cmd, callback);
}

module.exports.uploadImage= function(username,image, callback){
	let cmd = "update users set image_url = '"+image+"' where username = '"+username+"'";
	con.query(cmd,callback);
}




