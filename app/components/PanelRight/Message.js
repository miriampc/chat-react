import React from 'react'
import { connect } from 'react-redux'

class Message extends React.Component {
    render(){
        return (
            <div className="message">
                {this.props.messageValue}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { messageValue } = state
    return {
        messageValue
    }
}

const MessageWithRedux = connect(
    mapStateToProps
)(Message)

export default MessageWithRedux