import { combineReducers } from 'redux'

import ContactsReducer from './ContactsReducer'
import ContactSelectedReducer from './ContactSelectedReducer'
import messageValueReducer from './MessageValueReducer'

export default combineReducers({
    contacts: ContactsReducer,
    contactSelected: ContactSelectedReducer,
    messageValue: messageValueReducer
})
