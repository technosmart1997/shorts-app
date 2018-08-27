const express = require('express');
const router = express.Router();
const multer = require('multer');
const bodyParser = require('body-parser');
const jwt =  require('jsonwebtoken');
const con = require('../database/config');
const db = require('../app/db');
const bcrypt = require('../app/bcrypt');
const secret = require('../database/main');
const path = require('path');
const passport = require('passport');


  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now()+ path.extname(file.originalname));
    }
  })

   
  var upload = multer({ storage: storage });
//   var upload = multer({ storage: storage });





router.post('/authenticate', (req, res) => {
    
    if(req.body.username == '' || req.body.username == null || req.body.username == undefined  || req.body.password== '' || req.body.password == null || req.body.password == undefined){
        res.json({ status : false , message : 'Please Provide All The Credentials'});
    } else{
        db.findUserByUsername(req.body.username , function(err, user) {
                if(err){
                    console.log(err);
                }if(!user.length){
                    res.json({ status : false , message : 'Username Does Not Exist' });
			 }else{
                 // res.json({ status : true , user : user});
                 bcrypt.comparePass(req.body.password,user[0].password, function(err, match){
                     if(!match){
                         res.json({ status : false , message : 'Password Does Not Match' });
                 }else{
                        // res.json({ status : true , message : 'Successfully Authenticated'}); 

                        const token = jwt.sign({data : user},secret.secret, { expiresIn: 604800 });						

                        let cur_user = user[0];
                        delete cur_user['password']; 
            		 	res.json({ status : true, message : 'User Authenticated Successfully', token : 'JWT '+ token});
                      }
            });
        }
    });
}
});
    

router.get('/me', passport.authenticate('jwt', { session : false }), (req, res) => {
	let user = req.user[0];
	delete user['password'];
	res.json({ user : user});
});



router.post('/image-upload', upload.single('avatar'), function (req, res, next) {
    console.log('Function called');
    console.log(req.file);
});



module.exports = router;