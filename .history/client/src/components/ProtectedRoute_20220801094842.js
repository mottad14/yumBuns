import React from 'react'
import {useHistory} from 'react-router-dom'
import {UserAuth} from "../contexts/AuthContext"
import Alert from 'react-bootstrap/Alert';


function LinksExample() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </>
  );
}

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    const history = useHistory();

    if (!user){
        history.push("/");
        console.log("Please log in to continue.")
        return ( LinksExample())
    }

  return (  children  )
}

export default ProtectedRoute