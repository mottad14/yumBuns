import React from 'react'
import {useHistory} from 'react-router-dom'
import {UserAuth} from "../contexts/AuthContext"
import Alert from 'react-bootstrap/Alert';

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
  const history = useHistory();

    if (!user){
        history.push("/");
        console.log("Please log in to continue.")
        return (<Alert variant={"dark"}> 
          This is a {"dark"} alert—check it out!
        </Alert>)
    }

  return (  children  )
}

export default ProtectedRoute