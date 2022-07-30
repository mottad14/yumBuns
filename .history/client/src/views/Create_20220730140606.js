import React, {useState} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";


const Create = (props) => {
    const [form, setForm] = useState({
        name:"",
        minutes: 0,
        servings: null,
        calories: null,
        category: "", 
        imgURL: "",
        steps:[""], //Steps is going to need its own onChange-handler  
        ingredients:[ //Ingredients will also need its own onChange-handler
            {amount: "", name:"", measurement:""}
        ]
    })

    const history = useHistory();

    const onChangeHandler = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    
    const onAddStep = (event)=>{
        event.preventDefault();
        const copyForm = {...form};
        copyForm.steps.push("")
        setForm(copyForm);

    }
    
    const onAddIngredient = (event) =>{
        event.preventDefault();
        const copyForm = {...form};
        copyForm.ingredients.push({ amount: undefined, name: "", measurement: ""})
        setForm(copyForm);
    }

    const onRemoveIngredient = (event, i)=>{
        event.preventDefault();
        const copyForm = {...form}
        copyForm.ingredients.splice(i,1)
        setForm(copyForm)
    }

    const onRemoveStep = (event, i)=>{
        event.preventDefault();
        const copyForm = {...form}
        copyForm.steps.splice(i,1)
        setForm(copyForm)
    }

    const onChangeStep = (event, i)=>{
        const copyForm = {...form};
        copyForm.steps[i] = event.target.value;
        setForm(copyForm)
    }

    const onChangeIngredient = (event, i) => {
        const copyForm = {...form};
        copyForm.ingredients[i][event.target.name] = event.target.value;
        setForm(copyForm);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/recipes/create", form)
            .then(res=>{
                history.push("/");
            })
            .catch(err=>{
                console.log(err)
            })
    };

    return (
        <Card  style={{display: "flex", justifyContent: "center", backgroundColor: "white", maxWidth: "1000px"}}>
           
           <form className="d-block w-75 mx-auto" onSubmit={onSubmitHandler}>
               <div className="d-flex justify-content-around sticky d-block w-75 mx-auto p-2">
                    <h1> Build a recipe</h1>
                    <input type="submit" className="btn btn-lg btn-success" value="Post Recipe" />
                </div>
               
               <div className="form-group d-block w-75 mx-auto my-1">
                   <input type="text" name="name" onChange={onChangeHandler} className="form-control" placeholder="name of dish" />
               </div>
               
               <div className="row my-1 w-75 mx-auto">
                   <div className="col">
                       <input type="number" name="minutes" onChange={onChangeHandler} className="form-control" placeholder="total minutes" aria-label="minutes"/>
                   </div>
                    <div className="col">
                       <input type="number" name="servings" onChange={onChangeHandler} className="form-control" placeholder="servings" aria-label="servings"/>
                   </div>
                    <div className="col">
                       <input type="number" name="calories" onChange={onChangeHandler} className="form-control" placeholder="calories" aria-label="calories"/>
                   </div>
               </div>

                <div className="row my-1 w-75 mx-auto">
                   <div className="col">
                       <input type="text" name="category" onChange={onChangeHandler} className="form-control" placeholder="category" aria-label="category"/>
                   </div>
                    <div className="col input-group">
                       <input type="text" name="imgURL" onChange={onChangeHandler} className="form-control" placeholder="Enter Image URL" aria-label="imageURL"/>
                       <span className="input-group-text thumbnailBox">{form.imgURL.length > 0 && <img src={form.imgURL} alt="image thumbnail" />}</span>
                   </div>
               </div>
               
               <h2>ingredients:</h2>
               {
                   form.ingredients.map((ingredient, i)=> {
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
                   form.steps.map((step, i)=>{
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
    )

}

export default Create;