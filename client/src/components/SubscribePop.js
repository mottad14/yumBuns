import React, { useState } from 'react'
import "./SubscribePop.css"
import { Link, useHistory } from 'react-router-dom'
import subscribe from "../imgs/subscribe.svg"
import { UserAuth } from '../contexts/AuthContext'
import {Form, Button, Card, Alert} from "react-bootstrap"


function SubscribePop(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const history = useHistory();
  const {createUser} = UserAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();
    props.setTrigger(false)
    setError('')
    try{
      await createUser(email, password)
      console.log("New User Created!")
      history.push("/success");
    } catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  }


  return (props.trigger) ? (
    <div className='popUp'>
        <div className='popup-inner'>
            <img src={subscribe} alt="subscribe icon" />
            Treat yourself to more recipes! 

            <Card className='d-flex justify-content-center' style={{ width: 'auto' }}>
                <Card.Body>
                    <h3 className='text-center mb-4'> Create and receive more yummy recipes!</h3>
                      {error && <Alert variant="danger"> {error} </Alert>}

                    <Form onSubmit={handleSubmit}> 

                        <Form.Group className='flex flex-col py-2'>
                          <Form.Label className='py-2 font-medium' htmlFor=""> Email Address</Form.Label>
                          <Form.Control onChange={(e)=> setEmail(e.target.value)} className='border p-3' type="email"/>
                        </Form.Group>

                        <Form.Group className='flex flex-col py-2'>
                          <Form.Label className='py-2 font-medium' htmlFor=""> Password</Form.Label>
                          <Form.Control onChange={(e)=> setPassword(e.target.value)} className='border p-3' type="password"/>
                        </Form.Group>
                        
                        <Button type="submit" variant="warning" className='border border-blue-500 bg-yellow-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign up</Button>
      
                    </Form>
                </Card.Body>
            </Card>

            <button type='button' className='close-btn' onClick={(e) => {e.preventDefault();
               props.setTrigger(false) } }> close </button>
            <p className='w-100 text-center mt-2'>
            Already have an account? <Link onClick={() => props.setTrigger(false)} to="/login" className='underline'> Sign in </Link> 
            </p>
        </div>
    </div>
  ) : "";
}

export default SubscribePop