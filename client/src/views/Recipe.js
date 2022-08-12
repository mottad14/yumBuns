import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Recipe = (props) => {
    const history = useHistory();
    const [recipe, setRecipe] = useState({})
    const { _id } = useParams();
    const [deleteAlert, setDeleteAlert] = useState(false);

    const handleClose = () => setDeleteAlert(false);
    const deleteHandler = (e)=>{
        e.preventDefault();
        console.log("This is the delete handler being activated.")
        setDeleteAlert(true)
    }

    const deleteRecipe = () => {axios.delete("http://localhost:8000/api/recipes/delete/"+_id)
            .then(res=>{
                console.log(res)
                history.push("/successDelete");
            })
            .catch(err=>{
                console.log(err)
            });
        }



    // The following view is a part of a function, which is called at the bottom by userId dependent ternary 
    function viewRecipe(){        
        return(<div className="Recipe container p-4">
                    <h3>{recipe.name}</h3>
            <img src={recipe.imgURL} alt={recipe.name} />
            <h6> Recipe Categories: <Badge bg="info">{recipe.category}</Badge> </h6>
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
                            <Accordion.Header>Instructions</Accordion.Header>
                            <Accordion.Body>
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
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div>
                </div>
        </div>
        )
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes/one/'+_id)
            .then(res => {
                console.log("This is the current recipe data:", res.data)
                setRecipe(res.data);
            })
            .catch(err => console.error(err));
    }, [_id]);
    
    return ( props.userID && props.userID === recipe.userID) ? ( 
    <div> 
        <Modal show={deleteAlert} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete "{recipe.name}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you'd like to delete this yummy recipe?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteRecipe}>
            Delete Recipe
          </Button>
        </Modal.Footer>
      </Modal>
        <div>
         <Button> <Link to={`/edit/${_id}`} style={{color: "white", textDecoration: "none"}}> Edit your Recipe </Link> </Button>
         <Button onClick={deleteHandler} variant='danger'>  Delete your recipe </Button>
         
         </div> {viewRecipe()} 
    </div>)
         : (viewRecipe());
}

export default Recipe