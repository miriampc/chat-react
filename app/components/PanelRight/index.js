import React from 'react'
import { connect } from 'react-redux'
import HeaderPanel from "./HeaderPanel"
import InputMessage from "./InputMessage"

class PanelRight extends React.Component {
    renderChat() {
        if (!this.props.contactSelected) {
            return <div className="panel-right"> Seleccione a un contacto </div>
        }

        const { name, date } = this.props.contactSelected

        return (
            <div className="">
                <div >
                    <HeaderPanel nameContact={name} />
                </div>
                <div className="panel-right">                    
                    <p>{name}</p>
                    <p>{date}</p>
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