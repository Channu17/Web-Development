import mongoose from 'mongoose';

const usereSchema  = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is required"],
        trim : true,
        minLength : 2,
        maxLength: 50,
    },
    email:{
        type:String,
        required: [true, "Email is required"],
        unique: true,
        trim : true,
        lowercase: true,
        match : [/\S+@\S+\.\S+/, "Email is not valid"],

    },
    password:{
        type:String,
        required: [true, "Password is required"],
        minLength : 6,
        maxLength: 20,
    }, 
   
} ,{Timestamps: true});

const User = mongoose.model("User", UsereSchema);

export default User;
