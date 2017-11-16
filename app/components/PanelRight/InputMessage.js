import React from 'react'
import { connect } from 'react-redux'
import { messageValue } from '../../actions'
import Messages from "./Messages"

class InputMessage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: 'dsds'};    
        this.eventChange = this.eventChange.bind(this);
        this.enterMessage = this.enterMessage.bind(this);
    }

    eventChange(event) {        
        this.setState({value: event.target.value});
        console.log(this.state.value);    
    }
    enterMessage (event) {        
        if(event.keyCode == 13){
            alert('A name was submitted: ' + this.state.value);
            console.log("mesage",this.state.value);
            // const {messageVal} = this.state.value;
            event.preventDefault();    
            return this.state.value      
        }        
    }
    
    render(){
        const {messageVal} = this.enterMessage;
        return (
            <div className="footer-panel">
                <img src="https://image.ibb.co/mPR8xm/face.png" className="avatar"/>
                <input
                    id="message-text"
                    type="text"
                    placeholder="Type a message"
                    value={messageVal}
                    onChange={this.eventChange}
                    onKeyUp={this.enterMessage}
                />
                <img src="https://image.ibb.co/kepdxm/microfono.png" className=""/>
            </div>
        )
    }    
}

const mapStateToProps = value => {
    const {messageVal} = value
    return {messageVal}
}
const InputMessageWithRedux = connect( 
    mapStateToProps
)(InputMessage)

export default InputMessageWithRedux