import mongoose from "mongoose";


const userShcema = mongoose.Schema({
    username:{
        type : String,
        required : [true, "Please add the user"],
    },
    email:{
        type: String,
        required:[true, "Please add the email"],
        unique: [true , "Email address exists"]
    },
    password:{
        type: String,
        required: [true, "Please add the password"],
    },

}, {timestamps:true});

const User  = mongoose.model("User", userShcema);
export default User;
