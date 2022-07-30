import React from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from "../contexts/AuthContext"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if (!user){
      <Alert variant={"dark"}>
          This is a {"dark"} alert—check it out!
        </Alert>
        return <Navigate to='/'/>
    }

  return (  children  )
}

export default ProtectedRoute