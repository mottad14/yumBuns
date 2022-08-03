import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
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
        <div className="Recipe container p-4">
            <img src={recipe.imgURL} alt={recipe.name} />
                <div>
                    <h3>{recipe.name}</h3>
                    <p> <em> Serves {recipe.servings}  </em> </p>
                    <p>Prep time ⏲  <em>{recipe.minutes} minutes</em> </p> 
                </div>
                
                <div>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>

                        {recipe.steps? (recipe.steps).map((step, i) =>{
                        return (
                        <Accordion.Item eventKey={`${i}`} key={i+1} >
                            <Accordion.Header >Step #{i+1}</Accordion.Header>
                            <Accordion.Body>
                                {step}
                            </Accordion.Body>
                        </Accordion.Item>
                        )}
                        ): ""}

                        </Accordion>
                </div>
        </div>
    )
}

export default Recipe