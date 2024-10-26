const mongoose = require('mongoose');
const {DB_URI, DB_USER, DB_PASSWORD, MONGO_DBNAME} = require('../config/config')

const connectDB = () => {
  try {
    mongoose.connect(`${DB_URI}${DB_USER}:${DB_PASSWORD}@cluster0.4s8i6.mongodb.net/${MONGO_DBNAME}`);
    console.log('[db] Connected to', MONGO_DBNAME );
  } catch (error) {
    console.log('error :>> ', error);
  }
};


module.exports = {
  connectDB
};