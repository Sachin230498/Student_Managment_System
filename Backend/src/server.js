//server.js
const express=require('express');
const cors = require('cors');
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const studentRoutes=require('./routes/student')
const corsMiddleware = require('./middleware/cors');

//load environmnet variables 
dotenv.config();
const app= express();
app.use(bodyParser.json());
app.use(cors())

//connect to db
require('./config/db')


// app.use(corsMiddleware);


// // app.use(express.json()); //for parsing application/json
app.use('/api', studentRoutes);


console.log(process.env.MONGO_URL)

const PORT=8081
app.listen( PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
}
);// it takes two things port and
//EVf9dp3GUfdiLmUD
//f39elydTnwhSsNrQ