import React from 'react'

const ContactRow = ({ contact }) => {
    return (
        <div className="contact">
            <img src={contact.img} alt="" className="avatar"/>
            <div className="contact-name">{contact.name}</div>
            <div className="contact-date">{contact.date}</div>
        </div>
    );
}

export default ContactRow