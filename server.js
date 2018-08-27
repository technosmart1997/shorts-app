const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const multer = require('multer');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const app = express();

app.use(cors());
//MYSQL Connection
const mysql_con = require('./database/config');
const api = require('./routes/api');

// Serving static files
app.use(express.static(path.join(__dirname, 'dist')));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));


// Multer File Upload


//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
	res.send('Working Properly');
});

app.use('/api', api);

require('./auth/passport')(passport);

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});


//Port Setting
const port = process.env.PORT || 3000;

app.listen(port , function(){
	console.log('Server running On Port 3000');
});