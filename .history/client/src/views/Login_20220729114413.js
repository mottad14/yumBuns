import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Form, Button, Card, Alert} from "react-bootstrap"
import { UserAuth } from '../contexts/AuthContext'
import chef from "../imgs/chef.svg"

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {signIn} = UserAuth()
  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setError('')
    try{ 
      signIn(email, password)
      console.log("You are now signed in.")
      history.push('/')
    } catch(e){
      setError(e.message)
      console.log(error)
    }
  }

  return (
    <div style={{ display: 'flex',
        justifyContent: 'space-around',
        height: '80vh'}}>
    <img className='mr-4' style={{ maxWidth:'100%'}} src={chef} alt={chef} />
    <Card className="text-center bg-warning" style={{ width: '30rem' }}>
      <Card.Body className='text-center mb-4'>
              <h1 className='text-center mb-4'>Sign in to your account</h1>

          <Form onSubmit={handleSubmit}> 
              <Form.Group className='flex flex-col py-2'>
                <Form.Label className='py-2 font-medium' htmlFor=""> Email Address</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} className='border p-3' type="email"/>
              </Form.Group>
              <Form.Group className='flex flex-col py-2'>
                <Form.Label className='py-2 font-medium' htmlFor=""> Password</Form.Label>
                <Form.Control onChange={(e)=> setPassword(e.target.value)} className='border p-3' type="password"/>
              </Form.Group>
              <Button className='border border-blue-500 bg-yellow-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign in</Button>
          </Form>
              <p className='py-2'> Don't have an account? </p>
                <p> <Link to="/signup" className='underline'> Sign up </Link> </p>

        </Card.Body>
    </Card>
    </div>
  )
}

export default Signin