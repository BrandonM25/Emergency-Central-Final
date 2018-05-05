// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/users/", function(req, res) {
    db.Users.findAll({})
    .then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get rotue for retrieving a single user
  app.get("/api/users/:id", function(req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      emergency_contact_name: req.body.emergency_contact_name,
      emaemergency_contact_numberil: req.body.emergency_contact_number
    })
    .then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // DELETE route for deleting User
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // PUT route for updating user
  app.put("/api/users", function(req, res) {
    db.Users.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
