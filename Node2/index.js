const express =  require('express');

const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
    'host': 'localhost',
    'user': "root",
    "password": "manu2462"
});

con.connect(function (err) {
    if (err){
        console.log(err.message)
    }
    else {
       console.log("Successfully connected to database")
    }

    var createDatabase = "create database Nodejs";
    con.query(createDatabase, (err, result)=>{
        if(err) throw err;
        console.log(result);
    })
});



app.get('/', (req, res) => {
    res.send("App is running")
});

const port = 3001;
app.listen(port, (req , res) => {
    console.log("server is running at port"+ port)
});
