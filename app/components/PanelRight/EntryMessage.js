import React from 'react'
import { connect } from 'react-redux'
import { messageValue } from '../../actions'

const EntryMessage = ({inputValue,setInputValue}) => {
    return (
        <div className="footer-panel">
            <img src="face.png" className="avatar"/>
                <input type="text"
                   placeholder="Type a message"
                   value={inputValue}
                //    onChange={(event) => {
                //     setInputValue(event.target.value)
                //    }}
                   onKeyUp={event => {
                        if(event.keyCode == 13){
                            console.log(setInputValue(event.target.value))
                            setInputValue(event.target.value)
                            event.preventDefault();     
                        }
                   }}
                />
            <img src="microfono.png" className=""/>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {inputValue} = state
    return {
        inputValue
    }
}

export default connect(
    mapStateToProps,
    {
        setInputValue: messageValue
    }
)(EntryMessage)