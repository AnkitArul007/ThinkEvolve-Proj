const express = require("express");
const path = require("path")


//creating PORT::
const PORT = process.env.PORT || 3000;

//creating app instance::
const app = express();

//defining paths for the static folder::
const static_path = path.join(__dirname, "./public")


//using middlewares::
 app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//creating route::
app.get("/", (req, res)=>{
    res.sendFile("index.html")
})

//creating api to get my Data::
app.get("/getData", (req, res)=>{
    res.sendFile(__dirname + "/assignmentData.json")
})



app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
})

