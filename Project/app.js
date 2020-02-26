const express = require("express");
const app = express();
// print logs in terminal
const morgan = require('morgan');
const cors = require('cors');

// mongo db
const mongoose = require('mongoose');

mongoose.connect
(
    "mongodb://localhost:27017/demodb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            console.log("mongo not connected")
        } else {
            console.log("mongo connected");
        }
    }
);

const employeeroute = require("./routes/emp");


app.get('/', (req, res) => {
    res.status(200).json({
        error: false,
        message: 'Api is up and running'
    })
});

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use("/api/v1/employee", employeeroute);



const port = process.env.port || 5000;

app.listen(port, () => {
    console.log("server is running at port : ", port)
});





