require(dotenv).config();
const express = require("Express");
const connectDB = require("./userModel/user.js");

const app = express();

connectDB();

app.use(express.json());
app.use(express.Router());

app.listen(async,(req,res)=>{
    try{
        await .env/PORT || 5000;
        console.log("server running on port `($port)`");
        res.status(200).send("Welcome to my Backend!")
    }
    catch{
        error;
        res.send("failed running server")
    }
})

app.listen(async,(req,res)=>{
    try{
        await .env/DB_URL;
        console.log("Database connected successfully");
        res.status(200).send ("connected DataBase");
    }
    catch{
        error;
        console.log("database connection failed");
        res.status(404).send ("failed connecting to the datbase");
    }
})