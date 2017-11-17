import React from 'react'
import InputMessage from "./InputMessage"

const Messages = ({message}) => {
    return (
        <div className="message">
            {message}
        </div>
    )
}

export default Messages