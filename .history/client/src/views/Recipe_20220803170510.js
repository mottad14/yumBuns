import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
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
                    <h3>{recipe.name}</h3>
            <img src={recipe.imgURL} alt={recipe.name} />
                    <h5>Total Calories: {recipe.calories} </h5>
                <div>
                    <p>  Servings: {recipe.servings} </p>
                    <p>Total prep time: ⏲  <em>{recipe.minutes} minutes</em> </p>
                </div>
                
                <div className='container justify-content-center'>

                    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ingredients</Accordion.Header>
        <Accordion.Body>
            {recipe.ingredients? (recipe.ingredients).map((ingredient) =>{
                         return (
                             <ListGroup horizontal>
                             <ListGroup.Item>{ingredient.amount} {ingredient.measurement} of {ingredient.name}</ListGroup.Item>
                            </ListGroup>

                        )}
                        ): ""}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Steps</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



                     

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