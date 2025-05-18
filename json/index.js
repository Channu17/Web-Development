import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

const recipes = '[{"recipe": "Pasta", "ingredients": ["pasta", "sauce", "cheese"]}, {"recipe": "Salad", "ingredients": ["lettuce", "tomato", "cucumber"]}]';

// app.get("/", (req, res)=>{
//     res.send("hello world");
// });


// app.get("/recipe",(req, res)=>{
//     res.json(JSON.parse(recipes));
// })


app.get("/", async(req, res)=>{
    try{
        const response  = await axios.get("https://bored-api.appbrewery.com/random");
        res.json(response.data);
    }catch(err){
        console.error(err);
        res.status(500).send("Error fetching data");
    }
});




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// 