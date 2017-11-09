import React from 'react'
import ContactRow from './ContactRow'
import { connect } from 'react-redux'

class ListContacts extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        fetch('https://randomuser.me/api/?results=10&nat=es')
            .then((response) => {
                return response.json()
            })
            .then((contacts) => {
                this.setState({ contacts: contacts })
            })
    }

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
