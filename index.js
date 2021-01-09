const express =require('express')

const mysql =require("mysql")
const bodyparser=require('body-parser')

const knex=require('./model/database')

const app =express()

const jwt =require('jsonwebtoken')
const bodyParser = require('body-parser')


const isUserauth =require('./auth/auth');




app.use(express.json())

// let database =express.Router();
// app.use('/',)

let login=express.Router();
app.use('/',login);
require('./routes/login')(login,knex,jwt);

let deleted =express.Router();
app.use("/",deleted);
require("./routes/delete")(deleted,knex);


let updated =express.Router();
app.use("/",updated);
require("./routes/update")(updated,knex,isUserauth)

// require("./router/mysql")(knex)


let signup=express.Router();
app.use('/',signup);
require('./routes/signup')(signup,knex);


app.listen(3000,()=>{
    console.log("working..........");
})