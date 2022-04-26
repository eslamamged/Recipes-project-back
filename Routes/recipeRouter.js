const express = require("express");
const recipeRouter = express.Router();
const recipeController = require("../controller/recipeController");

recipeRouter
  .route("/")
  .get(recipeController.getAllRecipes)
  .post(recipeController.createRecipe);
recipeRouter
  .route("/:id")
  .get(recipeController.getRecipe)
  .patch(recipeController.editRecipe)
  .delete(recipeController.deleteRecipe);

module.exports = recipeRouter;
