import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser  = asyncHandler(async (req, res)=>{
    const { username, email, password }  = req.body;
    if(!username || !email || !password ){
        res.status(400);
        throw new Error("all fields are necessary");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });
    if(user){
        res.status(201).json({success:true,  user:username});
    }else{
        res.status(400);
        throw new Error("user data not valid");
    }
});

export const loginUser  = asyncHandler(async (req, res)=>{
    const { email, password } = req.body;
    if(!email || !password ){
        res.status(400);
        throw new Error("All fields are necesary");
    }

    const user = await User.findOne({email});
    if ( user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username :user.username,
                email:user.email,
                id  : user.id,
            },          
        }, process.env.ACCESS_TOKEN_SECRET,{expiresIn :"1d"})
        res.status(200).json({ accessToken });
    }
    else{
        res.status(401)
        throw new Error("email or password not valid ")
    }
    res.json({message:"login User"});
});

export const currentUser = asyncHandler(async (req, res)=>{
    
    res.json({message:"info of the current user"});
});