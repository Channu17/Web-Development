import jwt from "jsonwebtoken"; 
import dotenv from "dotenv";
import User from "../models/user.model.js";


dotenv.config();


const authorise = async (req, res, next) => {
    try{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        }
        if(!token) return res.status(401).json({message:"Unauthorised"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const user = await User.findById(decoded.userId);

        if(!user) return res.status(401).json({message:"unauthorised"});

        req.user = user;
        next();
    }catch(err){
        res.status(401).json({message:"Unauthorised", error:err.message})
    }
}

export default authorise;