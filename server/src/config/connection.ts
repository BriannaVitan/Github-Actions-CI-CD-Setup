import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz');
console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || '');

export default mongoose.connection;
