import express from "express";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send({message:"This is the contact manager backend"});
});


app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
});