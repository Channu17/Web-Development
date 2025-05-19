import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dburl = process.env.DB_URI;

const connectDB = async ()=>{
    if (!dburl) {
        console.error("Error: DB_URI is not defined. Make sure it's set in your .env file.");
        process.exit(1);
    }
    try {
        await mongoose.connect(dburl);
        console.log("MongoDB connected successfully");
    }catch (error) {
        console.error("Error connecting to MongoDB:", error.message); // Log error.message for a cleaner error output
        process.exit(1);
    }
}

export default connectDB;