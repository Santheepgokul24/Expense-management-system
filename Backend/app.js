const express = require('express');
const expenseRoutes = require('./src/Routes/expenseRoutes');
const authRoutes = require('./src/Routes/authRoutes');
const errorHandler = require('./src/middleware/errorMiddleware');

// create an instance of Express
const app = express();

//Built-in middleware
app.use(express.json());
// It parses incoming JSON request body and conver them into Js object and attach to req.body
app.use(express.urlencoded({extended : true})); 
// It parses URL-encoded bodies and convert them into JS Object and attches them to req.body

//routes
app.use('/api/expenses', expenseRoutes);
app.use('/api/users' , authRoutes);

app.use(errorHandler);

module.exports = app;