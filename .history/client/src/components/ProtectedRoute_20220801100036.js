import React from 'react'
import {useHistory} from 'react-router-dom'
import {UserAuth} from "../contexts/AuthContext"
import AlertMessage from './AlertMessage';


const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    const history = useHistory();

    if (!user){
        history.push("/");
        console.log("Please log in to continue.")
        return ( <AlertMessage></AlertMessage>)
    }

  return (  children  )
}

export default ProtectedRoute