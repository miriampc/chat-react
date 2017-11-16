import React from 'react'
import { connect } from 'react-redux'
import { filterContactsName } from '../../actions'

const SearchBar = ({filterText,setFilterText}) => {
    return (
        <form className="search">
            <input type="text"
                   placeholder="Buscar o empezar un chat nuevo"
                   value={filterText}
                   onChange={(event) => {
                       setFilterText(event.target.value)
                   }}
            />
        </form>
    );
}

const mapStateToProps = (state) => {
    const { AppReducer: { filterText } } = state
    return {
        filterText
    }
}

export default connect(
    mapStateToProps,
    {
        setFilterText: filterContactsName
    }
)(SearchBar)