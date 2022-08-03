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
        <div className="Recipe container p-3">
            <img src={recipe.imgURL} alt={recipe.name} />
                <div>
                    <h3>{recipe.name}</h3>
                    <p> <em> Serves {recipe.servings}  </em> </p>
                    <p>Prep time ⏲  <em>{recipe.minutes} minutes</em> </p> 
                </div>
                 <Accordion className='accordion' defaultActiveKey={['0']} alwaysOpen >
                    <Accordion.Item className='accordion' eventKey="0">
                        <Accordion.Header className='accordion' >Accordion Item #1</Accordion.Header>
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
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
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
    )
}

export default Recipe