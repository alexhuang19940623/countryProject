const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan=require('morgan');
const {readdirSync} = require('fs'); // give access to the file system
require('dotenv').config()

//app
const app = express()


//middlewares 
app.use(morgan('dev')); //print out route method and its status e.g. GET 200
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:'2mb'})); //pass json data to js, set limit to data sent by client
app.use(cors()); //cross origin


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

//route middleware - access file without having to require each time
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))



//port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
