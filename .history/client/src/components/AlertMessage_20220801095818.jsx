import React from 'react'

function AlertMessage() {
  return (
        <Alert variant={warning}>
          This is a danger alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      )
    }

export default AlertMessage