import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const navigate = useNavigate();
  const {createUser} = UserAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try{
      await createUser(email, password)
      navigate('/account')
    } catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  
  return (
    <Card>
      <Card.Body>
          <h1 className='text-center mb-4'>Sign up for an account</h1>

      <Form onSubmit={handleSubmit}> 
          <Form.Group className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor=""> Email Address</label>
            <input onChange={(e)=> setEmail(e.target.value)} className='border p-3' type="email"/>
          </Form.Group>

          <Form.Group className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor=""> Password</label>
            <input onChange={(e)=> setPassword(e.target.value)} className='border p-3' type="password"/>
          </Form.Group>
          
          <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign up</button>
      </Form>
      <p className='w-100 text-center mt-2'>
            Already have an account? <Link to="/" className='underline'> Sign in </Link> 
      </p>

      </Card.Body>
    </Card>
  )
}

export default Signup