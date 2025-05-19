import mongoose from "mongoose";
import express from "express";
import { Todo }  from "./models/Todo.js";


let conn = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    const todo = new Todo({
        title: "hello",
        desc: "world",
        isDone: false,
        days : 5
    })
    todo.save()
    res.send("hello world");
})

app.get("/find", async (req, res)=>{
    const todos = await Todo.findOne({title:"hello"})
    res.send(todos);
})

app.listen(port, ()=>{
    console.log("server is running on http://localhost:3000");
});
