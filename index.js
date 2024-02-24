const express = require('express');
const mongoose = require('mongoose');
const gifRoute = require('./routes/gifRoute');
const cors = require('cors')
const app = express();
require('dotenv').config();
const url = process.env.MONGO_URL;
const port = process.env.port;
app.use(express.json());
app.use(cors())
mongoose.connect(url)
.then(()=>{
    console.log('Connected to mongo');
})
.catch((err)=>{
    console.log(err.message);
})

app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
})

app.use('/api',gifRoute)