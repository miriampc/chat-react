import React from 'react'
import { connect } from 'react-redux'
import { contactSelected } from '../../actions'

const ContactRow = (props) => {
    const { contact } = props
    console.log(props)
    return (
        <div className="contact" onClick={() => props.selectContact(contact)}>
            <img src={contact.img} alt="" className="avatar"/>
            <div className="contact-name">{contact.name}</div>
            <div className="contact-date">{contact.date}</div>
        </div>
    )
}

const ContactRowConRedux = connect(
    null,
    {
        selectContact: contactSelected
    }
)(ContactRow)

export default ContactRowConRedux