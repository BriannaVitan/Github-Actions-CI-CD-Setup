import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://briannavitan:tq1c05G9GNqdH0nM@githubaction.cwabw.mongodb.net/?retryWrites=true&w=majority&appName=GithubActionn');

export default mongoose.connection;
