import React from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from "../contexts/AuthContext"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if (!user){
        return (<Alert variant={"dark"}> <Navigate to='/'/> 
          This is a {"dark"} alert—check it out!
        </Alert>)
    }

  return (  children  )
}

export default ProtectedRoute