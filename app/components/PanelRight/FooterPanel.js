import React from 'react'
import { connect } from 'react-redux'
//import { messageValue } from '../../actions'
import InputMessage from './InputMessage'

const FooterPanel = (props) => {
    // constructor (props) {
    //     super(props);
    //     this.state = {value: 'dsds'};    
    //     this.eventChange = this.eventChange.bind(this);
    //     this.enterMessage = this.enterMessage.bind(this);
    // }

    // eventChange(event) {        
    //     this.setState({value: event.target.value});
    //     console.log(this.state.value);    
    // }
    // enterMessage (event) {        
    //     if(event.keyCode == 13){
    //         alert('A name was submitted: ' + this.state.value);
    //         console.log("mesage",this.state.value);
    //         // const {messageVal} = this.state.value;
    //         event.preventDefault();    
    //         return (
    //             <div>{this.state.value}</div>
    //         )     
    //     }        
    // }
    
    // render(){
    //     //const {messageVal} = this.enterMessage;
        return (
            <div className="footer-panel">
                <img src="face.png" className="avatar"/>           
                <InputMessage {...props}/>
                <img src="microfono.png" className=""/>
            </div>
        )
    // }    
}
export default FooterPanel
// const mapStateToProps = value => {
//     const {messageVal} = value
//     return {messageVal}
// }
// const InputMessageWithRedux = connect( 
//     mapStateToProps
// )(InputMessage)

// export default InputMessageWithRedux