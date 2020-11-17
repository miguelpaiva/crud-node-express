const express = require("express");
const routes = express.Router();
console.users = [];

const userController = require("./controllers/UserController");

routes.get("/", (req, res) => res.send("Hello World"));

// CRUD
//routes.get("/users", userController.listUsers);
routes.get("/users", userController.listUsersByName);
routes.get("/users/:id", userController.getUserByID);

routes.post("/users", userController.createUser);

routes.put("/users/:id", userController.changeName);

routes.delete("/users/:id", userController.deleteUser);

module.exports = routes;
