import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function SuccessDelete() {
    const [show, setShow] = useState(true);

  return (
    <div>
        <Alert show={show} variant="success">
        <Alert.Heading>You've successfully deleted your recipe!</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="warning">
X          </Button>
        </div>
      </Alert>
    </div>
  )
}

export default SuccessDelete



