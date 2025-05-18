import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

const API_URL = "https://secrets-api.appbrewery.com";

const yourUname = "channu17";
const yourPass = "channu";
const yourToken = "2e833ad9-aaa8-48bc-8b8d-0cd6fa59e676";
const yourAPI = "";

app.get('/', (req, res)=>{
    res.send('hello world');
});


app.get("/noAuth", async (req, res)=>{
    try {
        const response = await axios.get(`${API_URL}/random`);
        res.json(response.data);
    }
    catch (error) {
        console.error(error);
    }

});

app.get("/basicAuth", async (req, res)=>{
    try{
        const response = await axios.get(`${API_URL}/all?page=2`,{
            auth:{
                username:   yourUname,
                password:   yourPass
            }
        })
        res.json(response.data);
    }catch(error){
        console.error(error);
    }
});

app.get("/tokenAuth", async(req, res)=>{
    try{
        const response = await axios.get(`${API_URL}/secrets/2`, {
            headers:{
                Authorization: `Bearer ${yourToken}`
            }
        })
        res.json(response.data);
    }
    catch(error){
        console.error(error);
    }
});

app.listen(port,()=>{
    console.log("Server is running on port " + port);
});