const bcrypt = require('bcryptjs');

const crypt = {};

crypt.createHash = function(password, callback){
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password,salt,callback);
    });
} 

crypt.comparePass = function(password,hashpass, callback){
    bcrypt.compare(password, hashpass, callback);
} 


module.exports = crypt;