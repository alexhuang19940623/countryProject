const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { readdirSync } = require('fs'); // give access to the file system
const path = require('path'); // Added to handle file paths
require('dotenv').config()

// app
const app = express()

// middlewares 
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors()); // cross origin

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// route middleware
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend/build')))

// send back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
})

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
