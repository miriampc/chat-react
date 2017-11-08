import React from 'react'
import ContactRow from './ContactRow'

const ListContacts = ({ contacts }) => {
    const rows = [];
    contacts.forEach(contact => {
        rows.push(<ContactRow contact={contact} key={contact.name} />);
    });
    return (
        <div className="panel-contacts">
            {rows}
        </div>
    );
}

export default ListContacts