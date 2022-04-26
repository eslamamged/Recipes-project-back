const Recipe = require("../modules/recipe/recipeModel");

exports.getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.editRecipe = async (req, res, next) => {
  let { title, ingredient, recipe, image } = req.body;
  const { id } = req.params;
  try {
    const oldRecipe = await Recipe.findById(id);
    const updated = await Recipe.findByIdAndUpdate(id, {
      title: title || oldRecipe.title,
      ingredient: ingredient || oldRecipe.ingredient,
      recipe: recipe || oldRecipe.recipe,
      image: image || oldRecipe.image,
    });
    res.send(updated);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.send(recipe);
  } catch (error) {
    error.statusCode = 404;
    next(error);
  }
};

exports.createRecipe = async (req, res, next) => {
  let { title, ingredient, recipe, image } = req.body;
  try {
    recipe = new Recipe({
      title,
      ingredient,
      recipe,
      image,
    });
    const createdRecipe = await recipe.save();
    res.send(createdRecipe);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};
exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipes = await Recipe.deleteOne({ _id: req.params.id });
    res.send(recipes);
  } catch (error) {
    error.statusCode = 404;
    next(error);
  }
};
