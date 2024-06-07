
const express = require('express');
const cors = require('cors');

const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const auth = require("./routes/auth")

//load environmnet variables 
dotenv.config();

const app= express();

dotenv.config()

app.use(bodyParser.json());
app.use(cors());


require('./config/db')






const PORT=8081
app.listen( PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
}
);