import React from 'react';
import Alert from 'react-bootstrap/Alert';


function AlertMessage() {
  return (
        <Alert variant="warning">
          Please <Alert.Link href="/login">log in</Alert.Link> or <Alert.Link href="/signup">sign up</Alert.Link> to create and share your recipes!
        </Alert>
      )
    }

export default AlertMessage