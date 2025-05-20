import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

export const signup = async (req, res, next) =>{
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
        const { name, email, password }  = req.body;
 
        const existingUser = await User.findOne({email});

        if (existingUser){
            const error = new Error("User already exists");
            error.statusCode = 400;
            throw error;
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const [newUser] = await User.create([{name,email,password: hashedPassword }], { session });

        const token = jwt.sign({ userId: newUser._id}, process.env.JWT_SECRET, { // Changed newUser[0]._id to newUser._id
            expiresIn: process.env.JWT_EXPIRE_IN,
        });

        await session.commitTransaction(); 
        session.endSession();
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data : token, 
            user : newUser, // Changed newUser[0] to newUser
        })

    }catch(err){
        await session.abortTransaction();
        session.endSession();
        next(err);
    }
}


export const signin = async (req, res, next) =>{
    try{    
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if(!user){
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch){
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE_IN,
        });

        res.status(200).json({
            success: true,
            message: "User signed in successfully",
            data : token,
            user : user,
        })

    }catch(err){
        next(err);
    }
}


export const signout = async (req, res, next) =>{
    
}