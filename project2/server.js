import express from "express";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.routes.js";
dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use("/api/contact", contactRouter);

app.get("/", (req, res)=>{
    res.send({message:"This is the contact manager backend"});
});


app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
});