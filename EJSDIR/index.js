const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")) // informs the server to search the views folder in the correct directory

app.get("/", (req,res) =>{
    res.render("home.ejs");
});

app.get("/ig/:username", (req,res) =>{
    let {username} = req.params;
   res.render("instagram.ejs",{username});
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});

app.get("/rolldice", (req,res) =>{
    let diceVal = Math.floor(Math.random()*6)+1; //incase value coming from a database
    res.render("rolldice.ejs",{num: diceVal}); //database value has been assigned to a key 'num'
});