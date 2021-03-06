import React from 'react'
import { connect } from 'react-redux'
import HeaderPanel from "./HeaderPanel"
import InputMessage from "./InputMessage"
import Messages from "./Messages"

class PanelRight extends React.Component {
    renderChat() {
        if (!this.props.contactSelected) {
            return (
            <div className="panel-right">
                <p>Seleccione a un contacto</p>
                <img src="https://image.ibb.co/fW7WHm/bg_right.png"/>
            </div>)            
        }
        console.log('aki',this.props.messageValue);
        // const {value} = this.props.messageValue;
        const { name, date, img} = this.props.contactSelected
        
        return (
            <div className="">
                <div >
                    <HeaderPanel nameContact={name} imgContact={img} />
                </div>
                <div className="panel-right">                    
                    <p>{name}</p>
                    <p>{date}</p>
                    <Messages />
                </div>
                <InputMessage />
            </div>
        )
    }
    render() {
        console.log('Props chat', this.props.contactSelected)
        return this.renderChat()
    }
}

const mapStateToProps = (state) => {
    const { contactSelected } = state

    return {
        contactSelected
    }
}

const PanelRightWithRedux = connect(
    mapStateToProps
)(PanelRight)

export default PanelRightWithRedux