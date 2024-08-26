import 'dotenv/config';
import mongoose from 'mongoose';

// MongoDB Atlas connection URL using the environment variable
const uri = process.env.DB_URI!;

mongoose.set('strictQuery', true);

export default {
  async connect() {
    try {
      // Connect to the client
      await mongoose.connect(uri);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  }
};
