import express from 'express';
const app = express();

// Add these lines to parse request bodies
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello world");
})

var jokes = [
    { id: 1, jokeText: "Why don't scientists trust atoms? Because they make up everything.", jokeType: "science" },
    { id: 2, jokeText: "Why did the scarecrow win an award? Because he was outstanding in his field.", jokeType: "pun" },
    { id: 3, jokeText: "Why don't programmers like nature? It has too many bugs.", jokeType: "programming" },
    { id: 4, jokeText: "Why did the math book look sad? Because it had too many problems.", jokeType: "math" },
    { id: 5, jokeText: "Parallel lines have so much in common. It’s a shame they’ll never meet.", jokeType: "math" },
    { id: 6, jokeText: "Why do cows have hooves instead of feet? Because they lactose.", jokeType: "pun" },
    { id: 7, jokeText: "Why did the chicken join a band? Because it had the drumsticks.", jokeType: "animal" },
    { id: 8, jokeText: "Why was the computer cold? It left its Windows open.", jokeType: "programming" },
    { id: 9, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one.", jokeType: "sports" },
    { id: 10, jokeText: "Why did the bicycle fall over? Because it was two-tired.", jokeType: "pun" },
    { id: 11, jokeText: "Why can’t you hear a pterodactyl go to the bathroom? Because the 'P' is silent.", jokeType: "wordplay" },
    { id: 12, jokeText: "Why did the tomato turn red? Because it saw the salad dressing.", jokeType: "food" },
    { id: 13, jokeText: "Why did the coffee file a police report? It got mugged.", jokeType: "food" },
    { id: 14, jokeText: "Why did the cookie go to the hospital? Because it felt crummy.", jokeType: "food" },
    { id: 15, jokeText: "Why did the stadium get hot after the game? All the fans left.", jokeType: "pun" },
    { id: 16, jokeText: "Why did the banker switch careers? He lost interest.", jokeType: "work" },
    { id: 17, jokeText: "Why did the picture go to jail? Because it was framed.", jokeType: "pun" },
    { id: 18, jokeText: "Why did the skeleton not go to the party? He had no body to go with.", jokeType: "halloween" },
    { id: 19, jokeText: "Why did the music teacher need a ladder? To reach the high notes.", jokeType: "music" },
    { id: 20, jokeText: "Why did the man run around his bed? Because he was trying to catch up on his sleep.", jokeType: "pun" }
];

app.get("/random", (req, res)=>{
    try{
        const randomINd = Math.floor(Math.random() * jokes.length);
        res.json(jokes[randomINd]);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }   
});

app.get("/jokes/:id",(req, res)=>{
    try{
        const jokeid = parseInt(req.params.id, 10);
        if (isNaN(jokeid)) {
            return res.status(400).send("Invalid joke ID format.");
        }
        const foundJoke = jokes.find((joke) => joke.id === jokeid);
        if (foundJoke) {
            res.json(foundJoke);
        } else {
            res.status(404).send("Joke not found.");
        }
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");  
    }
});


app.get("/filter",(req, res)=>{
    const jokeType = req.query.jokeType;
    const filteredJokes = jokes.filter((joke)=>joke.jokeType === jokeType);
    res.json(filteredJokes);
})

app.post("/add-jokes", (req, res)=>{
    const newJoke = {
    id : jokes.length+1,
    jokeText : req.body.jokeText,
    jokeType :req.body.jokeType
    }
    jokes.push(newJoke);
    res.status(201).json(newJoke);
})

app.put("/jokes/:id", (req, res)=>{
    const jokeid = parseInt(req.params.id, 10);
    const foundJoke = jokes.find((joke)=>joke.id === jokeid);
    if (foundJoke) {
        foundJoke.jokeText = req.body.jokeText;
        foundJoke.jokeType = req.body.jokeType;
        res.json(foundJoke);
    } else {
        res.status(404).send("Joke not found.");
    }
})

app.patch("/jokes/:id", (req, res)=>{
    const jokeid = parseInt(req.params.id, 10);
    const foundJoke = jokes.find((joke)=>joke.id === jokeid);
    if (foundJoke) {
        if (req.body.jokeText) {
            foundJoke.jokeText = req.body.jokeText;
        }
        if (req.body.jokeType) {
            foundJoke.jokeType = req.body.jokeType;
        }
        res.json(foundJoke);
    } else {
        res.status(404).send("Joke not found.");
    }
});

app.delete("/jokes/:id", (req, res)=>{
    const jokeid = parseInt(req.params.id, 10);
    const jokeind = jokes.findIndex((joke) =>joke.id === jokeid);
    if(jokeind!==-1){
        jokes.splice(jokeind, 1);
        res.status(204).send();
    }
    else{
        res.status(404).send("Joke not found.");
    }
})

app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`);
})

