const express = require('express');

// create an instance of Express
const app = express();

//Built-in middleware
app.use(express.json());
// It parses incoming JSON request body and conver them into Js object and attach to req.body
app.use(express.urlencoded({extended : true})); 
// It parses URL-encoded bodies and convert them into JS Object and attches them to req.body

//routes

module.exports = app;