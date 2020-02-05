const { Router } = require("express");
const Team = require("./model");

const router = new Router();
router.get("/", (request, response, next) => {
  Team.findAll().then(list => response.send(list));
});
router.post("/", (request, response, next) => {
  console.log("request body to create team", request.body);

  Team.create(request.body)
  .then( team => {
      console.log("created the team:")
      response.json(team)
  })
  .catch(error => next(error));
});
module.exports = router;

// Instantiate a router.
// Register a GET endpoint on the '/team' route. This route will get all the team rows from the table.
// TODO:
// The route handler should take three arguments: the request (or req), the response (or res), and the next function.
// Inside the route handler:
// Call the Team.findAll method.
// Add a then callback. It will receive the list of teams. Send the list as the response.
// Add a catch callback. It will receive an error if it is thrown. Pass it to next.
// Export the router.
// In index.js:
// Import ./team/router as a constant named teamRouter. You can remove the db and Team imports now, since they are already imported in team/router.js
// Pass the teamRouter to app.use to register the middleware.
