import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function SuccessMessage() {
    const [show, setShow] = useState(true);

  return (
    <div>
        <Alert show={show} variant="warning">
        <Alert.Heading>Your log in attempt failed</Alert.Heading>
        <p> {props.error}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="warning">
X          </Button>
        </div>
      </Alert>
    </div>
  )
}

export default SuccessMessage



