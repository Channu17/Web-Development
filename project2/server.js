import express from "express";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import connectDB from "./config/dbConnection.js";
import authRouter from "./routes/user.routes.js";
dotenv.config();


connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contact", contactRouter);
app.use("/api/auth", authRouter)

app.get("/", (req, res)=>{
    res.send({message:"This is the contact manager backend"});
});

app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
});
