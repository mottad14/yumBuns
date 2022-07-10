const Recipe = require("../models/recipe.model")

module.exports.testEndpoint = (req, res) =>{
    res.json({message: "Hello from the recipe controller"});
}


module.exports.findAllRecipes = (req, res) => {
    Recipe.find({})
    .then(results=> res.json(results))
    .catch(err=> res.status(400).json(err)) // we need to finish creating these controller routes - copy past most of them
}

// module.exports.createRecipe = (req,res) =>{
//     console.log("THIS IS THE REQUEST: ",req, "THIS IS THE RESPONSE: ",res)
//     Recipe.create(req.body)
//     .then(recipe => res.json(recipe))
//     .catch(err=>{
//         console.log(err);
//         res.status(400).json(err)
//     })
// }

module.exports.createRecipe = (request, response) => {
    // console.log(request, request.body);
    Recipe.create(request.body)
        .then(recipe => response.json(recipe))
        .catch(err => response.status(400).json(err));
}

module.exports.findOneRecipe = (req, res)=> {
    Recipe.findOne({_id: req.params._id})
    .then(results=> res.json(results))
    .catch(err=> res.status(400).json(err))
}

module.exports.deleteOneRecipe = (req, res) => {
    Recipe.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json(err))
}

module.exports.updateOneRecipe = (req, res) => {
    Recipe.updateOne({_id: req.params._id}, req.body, {runValidators: true})
    .then(results => res.json(results))
    .catch(err=> res.status(400).json(err))
}