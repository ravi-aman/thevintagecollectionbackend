const mongoose = require('mongoose');
const { secret } = require('./secret');

mongoose.set('strictQuery', false);

const MONGO_URI = secret.db_url;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connection success!');
  } catch (err) {
    console.error('❌ MongoDB connection failed!');
    console.error('Error Message:', err.message);
  }
};

module.exports = connectDB;
