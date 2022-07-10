const mongoose = require("mongoose");
const { timeStamp } = require("console");


const IngredientSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    }, 
    name: {
        type: String, 
        required: true
    },
    measurement:{
        type: String,
        required: true
    }
})

const RecipeSchema = new mongoose.Schema({
    // name
    name:{
        type: String,
        required: true,
        minlength:[5, "name must be at least 5 characters"]
    },
        // estimated time it takes to make
    minutes: {
        type: Number,
        required: true,
        min:[1, "must take at least 1 minute"]
    },
    // serves how many 
    servings:{
        type: Number,
        required: true,
        min: [1, "must serve at least one"]
    },
    calories:{
        type: Number,
        min:[1, "Must have more than 0 calories"]
    },
    
    category:{
        type: String,
        required: true
    },
    imgURL:{
        type:String,
        required: true
    }, 
    ingredients:{
        type:[IngredientSchema]
    },
    steps:{
        type:[String]
    }

}, {timestamps:true})

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;