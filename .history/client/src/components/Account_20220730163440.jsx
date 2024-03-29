import React from 'react';
import { useHistory } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const Account = () => {
  const {user, logout} = UserAuth();
    const history = useHistory();

  const handleLogout = async () => {
    try{
      await logout()
      history.push('/')
      console.log("You are now logged out")
    } catch (e) {
      console.log (e.message)
    }
  }
  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>This is our private account section</h1>
      <p>User Email: { user && user.email }</p>


      <button onClick={handleLogout} className='border px-6 py-2 my-4'> Logout</button>
      </div>
  )
}

export default Account