import React from 'react'
import { connect } from 'react-redux'
import { messageValue } from '../../actions'


class InputMessage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: ''};    
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
            event.preventDefault();      
        }        
    }
    componentWillMount(event) {
        this.setState({value: event.target.value});
    }
    render(){
        //const {messageVal} = this.state;
        return (                   
            <input
                id="message-text"
                type="text"
                placeholder="Type a message"
                //value={this.componentWillMount}
                onChange={this.componentWillMount}
                onKeyUp={this.enterMessage}
            />
        )
    }    
}

const mapStateToProps = (value) => {
    const {messageVal} = value
    console.log(value);
    return {messageVal}
}
const InputMessageWithRedux = connect( 
    mapStateToProps
)(InputMessage)

export default InputMessageWithRedux