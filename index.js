const db = require("./db");
const Team = require('./team/model')
const express = require("express");
const app = express();

app.get("/test", (request, response) => response.send("<h1>Hello World</h1>"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("portnumber is: ", port));
