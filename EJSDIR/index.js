const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")) // informs the server to search the views folder in the correct directory

app.get("/", (req,res) =>{
    res.render("home.ejs");
})

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});
