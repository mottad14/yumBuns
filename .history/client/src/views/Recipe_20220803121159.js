import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

const Recipe = (props) => {
    const [recipe, setRecipe] = useState({})
    const { _id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes/one/'+_id)
            .then(res => {
                console.log("This is the current recipe data:", res.data)
                setRecipe(res.data);
            })
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div className="Recipe container">
            <img src={recipe.imgURL} alt={recipe.name} />
                <div>
                    <h3>{recipe.name}</h3>
                    <p> <em> Serves {recipe.servings}  </em> </p>
                    <p>⏲  <em>{recipe.minutes} minutes</em> </p> 
                </div>
        </div>
    )
}

export default Recipe