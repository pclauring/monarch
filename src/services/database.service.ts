// External Dependencies
import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

// Global Variables
//export const collections: { monsters?: mongoDB.Collection } = {};

// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();
  await mongoose.connect(process.env.DB_CONN_STRING || '')
  
  console.log(
    `Successfully connected to mongoDB`
  );
}
