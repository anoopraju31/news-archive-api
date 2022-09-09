import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const MessageAlert = ({message}) => {
    const [showMessage, setShowMessage] = useState(true)
    return (
        <>
            <Alert 
                variant="danger" 
                onClose={() => setShowMessage(false)} 
                dismissible
            >
                <Alert.Heading> {message} </Alert.Heading>
            </Alert>
        </>
    )
}

export default MessageAlert