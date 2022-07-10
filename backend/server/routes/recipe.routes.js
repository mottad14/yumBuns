const RecipeController = require("../controllers/recipe.controller");

module.exports = app => {
    app.get("/api/test", RecipeController.testEndpoint); //our controller file will need to know what this does
    app.get("/api/recipes/all", RecipeController.findAllRecipes);
    app.post("/api/recipes/create", RecipeController.createRecipe);
    app.get("/api/recipes/one/:_id", RecipeController.findOneRecipe)
    app.delete("/api/recipes/delete/:_id", RecipeController.deleteOneRecipe);
    app.patch("/api/recipes/update/:_id/", RecipeController.updateOneRecipe);
}