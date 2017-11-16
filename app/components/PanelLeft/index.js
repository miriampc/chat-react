import React from 'react'
import HeaderPanel from "./HeaderPanel"
import SearchBar from "./SearchBar"
import ListContacts from "./ListContacts"

const PanelLeft = ({contacts}) => {
    return (
        <div className="panel-left">
            <HeaderPanel />
            <SearchBar />
            <ListContacts contacts = {contacts} />
        </div>
    );
}

export default PanelLeft