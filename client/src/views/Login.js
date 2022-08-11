import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Form, Button, Card, Alert} from "react-bootstrap"
import { UserAuth } from '../contexts/AuthContext'
import chef from "../imgs/chef.svg"
import { useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {signIn} = UserAuth()
  const history = useHistory();
  const [attempt, setAttempt] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setError('')
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAttempt(true)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    setAttempt(true)
    console.log(errorCode)
  });

  }

  useEffect(() => {
    if (error.length === 0 && attempt){
      history.push('/success')
    } 
  }, [handleSubmit])
  

  
  return (
    <div style={{ display: 'flex',
        height: '80vh'}}>
    <img className='flex' style={{maxWidth: "50vw"}} src={chef} alt={chef} />
    <Card className="text-center bg-warning" xs={12} md={4} lg={3}>
      <Card.Body className='text-center mb-4'>
        
        {error && <Alert variant={"danger"}>
          {error}
        </Alert> }

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
              <Button type="submit" className='border border-blue-500 bg-yellow-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign in</Button>
              <p className='py-2'> Don't have an account? </p>
              <Link to="/signup" className='underline'> Sign up </Link>
          </Form>

        </Card.Body>
    </Card>
    </div>
  )
}

export default Signin