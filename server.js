const { readdirSync } = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const helmet = require("helmet")
const morgan = require('morgan');
const mongoose = require('mongoose');



// middlewares 
app.use(cors()); 
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(helmet());


// routes and middlewares

readdirSync("./routes").map(r => app.use("api/v1", require(`./routes/${r}`)))


//Server

const port = process.env.PORT || 3000;


// connect to MongoDB and start server 
mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port, () =>{
            console.log(`Server is listening on ${port}`);
        })
    })
    .catch((err) => console.log(err));