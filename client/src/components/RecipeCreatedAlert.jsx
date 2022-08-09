import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function RecipeCreatedAlert() {
    const [show, setShow] = useState(true);

  return (
    <div>
        <Alert show={show} variant="success">
        <Alert.Heading>You're recipe was successfuly posted!</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="warning"> x </Button>
        </div>
      </Alert>
    </div>
  )
}

export default RecipeCreatedAlert



