import React from 'react'
import { connect } from 'react-redux'
import { contactSelected } from '../../actions'

const ContactRow = (props) => {
    const { contact } = props
    console.log(props)
    return (
        <div className="contact" onClick={() => props.selectContact(contact)}>
            <img src={contact.img} alt="" className="avatar"/>
            <div className="contact-name">{contact.name}
                <div className="contact-city">{contact.city}</div>
            </div>
            <div className="contact-date">{contact.date}</div>
        </div>
    )
}

const ContactRowWithRedux = connect(
    null,
    {
        selectContact: contactSelected
    }
)(ContactRow)

export default ContactRowWithRedux