import React from "react";
import { useHistory } from "react-router-dom";

const RecipePreview = (props) => {
    const {data} = props;
    const history = useHistory();
    const recipeOpen = (event, i) =>{
        event.preventDefault();
        console.log("The current entry's id is:", data._id)
        history.push(`/view/single/${data._id}`)

        
    }

    return(
        <button onClick={recipeOpen} className="recipePreview">
            <img src={data.imgURL} alt={data.name} />
                <div>
                    <h3>{data.name}</h3>
                    <p> <em> Serves {data.servings} </em> ⏲ <em>{data.minutes}</em>  </p> 
                </div>

        </button>
    )
}

export default RecipePreview