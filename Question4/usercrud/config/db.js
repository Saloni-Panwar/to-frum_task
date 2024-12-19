const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

//   if (!mongoUri) {
//     console.error('Error: MONGO_URI is not defined in .env file.');
//     process.exit(1);
//   }

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
