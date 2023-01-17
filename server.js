import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));

app.listen(PORT, () => console.log(process.env.DATABASE_URL));