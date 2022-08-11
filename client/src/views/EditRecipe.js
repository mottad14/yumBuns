import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function EditRecipe(props) {
    const history = useHistory();
    const {_id} = useParams();

    const[recipe, setRecipe] = useState();
    const [name, setName] = useState();
    const [minutes, setMinutes] = useState();
    const [servings, setServings] = useState();
    const [calories, setCalories] = useState();
    const [category, setCategory] = useState(); 
    const [imgURL, setImgURL] = useState();
    const [steps, setSteps] = useState() //Steps is going to need its own onChange-handler  
    const [ingredients, setIngredients] = useState()
    const [loaded, setLoaded] = useState(false);
    const[formset, setFormset] = useState(false);

    const [form, setForm] = useState({
        userID: props.userID,
        name:"",
        minutes: 0,
        servings: undefined,
        calories: undefined,
        category: "", 
        imgURL: "",
        steps:[], //Steps is going to need its own onChange-handler  
        ingredients:[ //Ingredients will also need its own onChange-handler
            {amount: "", name:"", measurement:""}]
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes/one/'+_id)
            .then(res => {
                console.log("This is the current recipe data:", res.data)
                setRecipe(res.data);
                setName(res.data.name)
                setMinutes(res.data.minutes)
                setServings(res.data.servings)
                setCalories(res.data.calories);
                setCategory(res.data.category)
                setImgURL(res.data.imgURL)
                setSteps(res.data.steps)
                setIngredients(res.data.ingredients)
                setLoaded(true)
    console.log("This is the current form data after loading it", form)
            })
            .catch(err => console.error(err));
    }, [loaded]);
    
    const onAddStep = (event)=>{
        event.preventDefault();
        const copySteps = [...steps];
        copySteps.push("")
        setSteps(copySteps);

    }
    
    const onAddIngredient = (event) =>{
        event.preventDefault();
        const copyIngredients = [...ingredients];
        console.log("The current Copy of Ingredients includes: ",copyIngredients)
        copyIngredients.push({ amount: undefined, name: "", measurement: ""})
        setIngredients(copyIngredients);
    }

    const onRemoveIngredient = (event, i)=>{
        event.preventDefault();
        const copyIngredients = [...ingredients];
        copyIngredients.splice(i,1)
        setIngredients(copyIngredients)
    }

    const onRemoveStep = (event, i)=>{
        event.preventDefault();
        const copySteps = [...steps]
        copySteps.splice(i,1)
        setSteps(copySteps)
    }

    const onChangeStep = (event, i)=>{
        const copySteps = [...steps];
        copySteps[i] = event.target.value;
        setSteps(copySteps)
    }

    const onChangeIngredient = (event, i) => {
        const copyIngredients = [...ingredients];
        copyIngredients[i][event.target.name] = event.target.value;
        setIngredients(copyIngredients);
    }

    const onSubmitHandler = (event) => {        
        event.preventDefault();
        console.log(name)
        setForm({
        ["userID"]: props.userID,
        ["name"]: name,
        ["minutes"]: minutes,
        ["servings"]: servings,
        ["calories"]: calories,
        ["category"]: category, 
        ["imgURL"]: imgURL,
        ["steps"]:steps, //Steps is going to need its own onChange-handler  
        ["ingredients"]: ingredients
    })
    setFormset(true)
    console.log("This is the current form being set", form)
    };
    // This useEffect will only trigger when the form has been set in our useState
    useEffect(() => {
        formset && axios.patch("http://localhost:8000/api/recipes/update/"+_id, form)
            .then(res=>{
                history.push("/recipePosted");
                console.log(form.userID)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [formset]);
    
                
                

    return (loaded && (props.userID === recipe.userID)) ? (
        <Card bg="light"  style={{display: "flex", justifyContent: "center"}}>
           <form className="d-block w-75 mx-auto" onSubmit={onSubmitHandler}>
            <input type="hidden" name="userID" value={props.userID}/>
               <div className="d-flex justify-content-around sticky d-block w-75 mx-auto p-2">
                    <h1> Build a recipe</h1>
                    <input type="submit" className="btn btn-lg btn-success" value="Post Recipe" />
                </div>
               
               <div className="form-group d-block w-75 mx-auto my-1">
                   <input type="text" name="name"  value={name} onChange={(e)=> {setName(e.target.value)}} className="form-control" placeholder="name of dish" />
               </div>
               
               <div className="row my-1 w-75 mx-auto">
                   <div className="col">
                       <input type="number" name="minutes" value={minutes} onChange={(e)=> {setMinutes(e.target.value)}} className="form-control" placeholder="total minutes" aria-label="minutes"/>
                   </div>
                    <div className="col">
                       <input type="number" name="servings" value={servings} onChange={(e)=> {setServings(e.target.value)}} className="form-control" placeholder="servings" aria-label="servings"/>
                   </div>
                    <div className="col">
                       <input type="number" name="calories" value={calories} onChange={(e)=> {setCalories(e.target.value)}} className="form-control" placeholder="calories" aria-label="calories"/>
                   </div>
               </div>

                <div className="row my-1 w-75 mx-auto">
                   <div className="col">
                       <input type="text" name="category" value={category} onChange={(e)=> {setCategory(e.target.value)}} className="form-control" placeholder="category" aria-label="category"/>
                   </div>
                    <div className="col input-group">
                       <input type="text" name="imgURL" value={imgURL} onChange={(e)=> {setImgURL(e.target.value)}} className="form-control" placeholder="Enter Image URL" aria-label="imageURL"/>
                       <span className="input-group-text thumbnailBox">{imgURL && <img src={imgURL} alt="image thumbnail" />}</span>
                   </div>
               </div>
               
               <h2>ingredients:</h2>
               {
                   ingredients.map((ingredient, i)=> {
                   return (
                       <div key={i} className="input-group my-1 mx-auto w-75">
                        <input type="text" value={ingredient.name} onChange={(event)=>onChangeIngredient(event, i)} className="form-control" placeholder="ingredient name" name="name" aria-label="amount" />
                        <input type="number" value={ingredient.amount} onChange={(event)=>onChangeIngredient(event, i)} className="form-control" placeholder="quantity" name="amount" aria-label="amount" />
                        <input type="text" value={ingredient.measurement} onChange={(event)=>onChangeIngredient(event, i)} className="form-control" placeholder="cups, tsp, Tbsp, etc." name="measurement" aria-label="amount"/>
                        <button  className="btn btn-sm btn-danger" onClick={(event)=>onRemoveIngredient(event, i)}>X</button>
                    </div>)
                   })
               }
                <button onClick={onAddIngredient} className="btn btn-dark">Add Ingredient</button>

               <h2>steps:</h2>
               {
                   steps.map((step, i)=>{
                       return <div key={i} className="input-group my-1 mx-auto w-75">
                                <span className="input-group-text" key={i}> Step {i+1}</span>
                                <textarea onChange={(event)=>onChangeStep(event, i)} value={step} placeholder="Type instructions here" className="form-control col-12" aria-label="With textarea"></textarea>
                                <button className="btn btn-sm btn-danger" onClick={(event)=>onRemoveStep(event, i)}>X</button>
                            </div>
                   })
               }
               <button onClick={onAddStep} className="btn btn-dark">Add Step</button>
           </form>

        </Card>
    ) : ("You do not have access to edit this recipe")
    

}

export default EditRecipe
