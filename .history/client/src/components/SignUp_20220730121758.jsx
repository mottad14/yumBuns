import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Form, Button, Card, Alert} from "react-bootstrap"
import { UserAuth } from '../contexts/AuthContext'
import chef from "../imgs/chef.svg"

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const history = useHistory();
  const {createUser} = UserAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try{
      await createUser(email, password)
      history.push("/");
    } catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  
  return (
    <Card className='d-flex justify-content-center' style={{ width: '25rem' }}>
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
          <Button variant="warning" className='border border-blue-500 bg-yellow-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign up</Button>
          </Form.Group>
          
      </Form>
      

      </Card.Body>
    </Card>
  )
}

export default Signup