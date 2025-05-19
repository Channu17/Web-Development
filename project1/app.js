import express from "express";

import  userRouter from "./routes/user.routes.js";
import  authRouter from "./routes/auth.routes.js";
import  subscriptionRouter from "./routes/subscription.routes.js";


const app = express();
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);



app.get("/", (req, res)=>{
    res.send({ body: "welcome to the subscription Tracker API" });
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    console.log("http://localhost:3000");
})

export default app;