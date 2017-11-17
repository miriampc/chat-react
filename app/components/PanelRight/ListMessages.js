import React from 'react'
// import InputMessage from "./InputMessage"
import Message from './Message'
import { connect } from 'react-redux'

class ListMessages extends React.Component {
    constructor (props) {
        super(props)
    }
    
    render (){
        return (
            <div className="message">
                <Message valueInput={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { message: input } = state
    return {
        props: input
    }
}

const ListMessagesWithRedux = connect(mapStateToProps)(ListMessages)

export default ListMessagesWithRedux