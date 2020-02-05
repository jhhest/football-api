const express = require("express");
const app = express();
const teamRouter = require("./team/router");

app.use(teamRouter);
app.get("/test", (request, response) => response.send("<h1>Hello World</h1>"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("portnumber is: ", port));
