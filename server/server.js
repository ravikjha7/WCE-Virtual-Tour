const express = require('express');
const app = express();
const connectDB = require("./utils/db");
require("dotenv").config();
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const tourRoutes = require('./routes/tours');

connectDB();

app.use(cors());

app.use('/tour', tourRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to the Virtual Tour of Walchand College Of Engineering !!!");
})

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})