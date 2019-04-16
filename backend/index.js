const express = require('express');
const http = require('http');
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const app = express();
const cors = require('cors');

//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*' }));
app.use(bodyParser.urlencoded({extended: false}));

//Serve any static files built by React
// if(process.env.PORT){
//   app.use(express.static(path.join(__dirname, 'client', 'build')));

//   app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//   });
// }

console.log('hello');
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log('Server started on port 5000');