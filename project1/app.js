import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send({ body: "welcome to the subscription Tracker API" });
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    console.log("http://localhost:3000");
})

export default app;