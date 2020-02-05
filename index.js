const express = require("express");
const teamRouter = require("./team/router");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use("/team", teamRouter);
app.get("/test", (request, response) => response.send("<h1>Hello World</h1>"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("portnumber is: ", port));
