import { combineReducers } from 'redux'

import ContactsReducer from './ContactsReducer'
import ContactSelectedReducer from './ContactSelectedReducer'

export default combineReducers({
    contacts: ContactsReducer,
    contactSelected: ContactSelectedReducer
})
