const express = require('express');
const http = require('http');
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const app = express();
const cors = require('cors');
// const unirest = require('unirest');

//Routers
// const SkyScannerRouter = require('./backend/routes/SkyScannerRoutes.js')();

//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*' }));
app.use(bodyParser.urlencoded({extended: false}));

// Listeners for each route
// app.use('/', SkyScannerRouter);

//Serve any static files built by React
if(process.env.PORT){
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log('Server started on port 5000');