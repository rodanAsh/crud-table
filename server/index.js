
const express = require("express");
const users = require("./sample.json");
var cors = require("cors");

const app = express();
app.use(cors())
const port = 8000;

// display all users

app.get("/users", (req,res) => {
    return res.json(users);
})

app.listen(port, (err) => {
    console.log(`App is running in port ${port}`);
});