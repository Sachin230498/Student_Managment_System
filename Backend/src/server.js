const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require ('body-parser');
const app= express();

dotenv.config()

app.use(bodyParser.json());
app.use(cors());


require('./config/db')

const PORT=8081;

app.listen( PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
}
);// it takes two things port and callback   

// i9j5I3Z9Mf0HlIrd

// mongodb+srv://shi1010awasthi:i9j5I3Z9Mf0HlIrd@cluster0.74fgw4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0