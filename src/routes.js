const express = require("express");
const routes = express.Router();
console.users = [];

const userController = require("./controllers/UserController");

const idValidationMiddleware = require("./middlewares/idValidation");
const nameValidationMiddleware = require("./middlewares/nameValidation");
const listNameValidation = require("./middlewares/listNameValidation");

routes.get("/", userController.listUsers);

// CRUD
//routes.get("/users", userController.listUsers);

routes.get("/users", listNameValidation, userController.listUsersByName);
routes.get("/users/:id", idValidationMiddleware, userController.getUserByID);

routes.post("/users", nameValidationMiddleware, userController.createUser);

routes.put("/users/:id", idValidationMiddleware, userController.changeName);

routes.delete("/users/:id", idValidationMiddleware, userController.deleteUser);

module.exports = routes;
