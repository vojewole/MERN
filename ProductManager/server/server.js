const express = require('express');
const cors = require('cors'); 
const app = express();
require('./config/productManager.config');
app.use(cors());  
app.use(express.json(), express.urlencoded({extended: true}));
const port = 8000;
require('../server/routes/productManager.routes')(app);
app.listen(port, console.log('Listening on port 8000.'))