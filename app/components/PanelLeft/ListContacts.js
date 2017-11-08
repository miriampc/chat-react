import React from 'react'
import ContactRow from './ContactRow'
import { connect } from 'react-redux'

class ListContacts extends React.Component {
    render(){
        console.log("List",this.props)
        return (
            <div className="panel-contacts">
                {this.props.contacts.map(contact => {
                    return (
                        <ContactRow key={contact.name} contact={contact} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { contacts } = state

    return {
        contacts,
    }
}

const ListContactsWithRedux = connect(
    mapStateToProps
)(ListContacts)

export default ListContactsWithRedux
