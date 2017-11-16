import { getUsefulContacts } from './dataContacts';
import { FILTER_CONTACTS_NAME } from '../actions/types'


let CONTACTS = []

getUsefulContacts('https://randomuser.me/api/?results=10&nat=es',
     data => {getData(data)}
);

const getData = (data) => {
    CONTACTS = data.results.map(e => CONTACTS.push({ name: e.name.first + ' ' + e.name.last, city: e.location.city,img: e.picture.thumbnail, date: e.dob.substr(0,10).replace(/-/g,"/") }));
}

const INITIAL_STATE = {
    originalContacts: CONTACTS, // lista original de contactos
    filterText: '', // texto que ingresa el usuario para buscar
    filteredContacts: CONTACTS, // inicialmente no hay ningun filtro
}

export default (state = INITIAL_STATE, action) => {
    let newState = {}
    switch (action.type) {
        case FILTER_CONTACTS_NAME:
            newState = {
                ...state,
                filterText: action.payload
            }
            break
        default:
            return state
    }
    if (action.type === FILTER_CONTACTS_NAME) {
        const filteredContacts = state.originalContacts.filter((contact) => {
            const filterText =
                action.type === FILTER_CONTACTS_NAME ?
                    action.payload.trim() :
                    state.filterText.trim()
            return (
                (contact.name.match(new RegExp(filterText, 'ig')))
            )
        })
        newState = {
            ...newState,
            filteredContacts
        }
    }
    return newState
}
