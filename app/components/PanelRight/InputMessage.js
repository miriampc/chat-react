import React from 'react'
import { connect } from 'react-redux'

class InputMessage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: ''};    
        this.eventControl = this.eventControl.bind(this);
    }

    eventControl(event) {
        if(event.keyCode == 13){
            alert('Adding....');
            this.setState({value: event.target.value});
        }        
    }
    render(){
        return (
            <div className="footer-panel">
                <img src="face.png" className="avatar"/>
                <input id="message-text" type="text" placeholder="Type a message" />
                <input
                    type="text"
                    placeholder="Type a message"
                    value={this.state.value}
                    onChange={this.eventControl}
                />
                <img src="microfono.png" className=""/>
            </div>
        )
    }    
}
//const InputMessageWithRedux = connect()

export default InputMessage