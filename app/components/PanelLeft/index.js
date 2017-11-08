import React from 'react'
import HeaderPanel from "./HeaderPanel"
import SearchBar from "./SearchBar"
import ListContacts from "./ListContacts"

const PanelLeft = () => {
    return (
        <div className="panel-left">
            <HeaderPanel />
            <SearchBar />
            <ListContacts />
        </div>
    );
}

export default PanelLeft