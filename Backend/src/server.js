//server.js
const express=require('express');
const cors = require('cors');
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const auth = require("./controller/authController")

//load environmnet variables 
dotenv.config();
const app= express();
app.use(bodyParser.json());
app.use(cors())

//connect to db
require('./config/db')

app.use("/api" , auth)




const PORT=8081
app.listen( PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
}
);// it takes two things port and
//EVf9dp3GUfdiLmUD
//f39elydTnwhSsNrQ