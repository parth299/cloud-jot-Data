const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/cloudjot";

const connectToMongo = () => {
    mongoose.connect(connectionString, {})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

}

module.exports = connectToMongo;