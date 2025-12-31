const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const app = require('./app');

// Bring .env to process.env
dotenv.config();

// Connect to Database
connectDB();

const PORT = process.env.PORT || 5001;
 
// Connect to server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});