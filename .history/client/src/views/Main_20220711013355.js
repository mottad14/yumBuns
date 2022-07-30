import React, {useState, useEffect} from "react";
import axios from "axios";
import RecipePreview from "../components/RecipePreview";

const Main = (props) => {
    const [recipes, setRecipes]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/recipes/all")
        .then(res=>{
            setRecipes(res.data);
        })
        .catch(err=>console.log(err))
    }, [])

    return(
        <div className="d-flex justify-content-around flex-wrap w-75 mx-auto">
            {
                recipes.map((item,i)=>{
                    return <RecipePreview key={item._id} data={item} />
                })
            }
        </div>
    )
}

export default Main;