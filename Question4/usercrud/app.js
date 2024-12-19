const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/userRoute');
const env = require('dotenv');
env.config();// Connect to the database (without env)
connectDB();

const app = express();
const PORT = 5000;
app.use(express.json());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
