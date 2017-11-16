import { combineReducers } from 'redux'
import AppReducer from './AppReducer'
import ContactSelectedReducer from './ContactSelectedReducer'
import messageValueReducer from './MessageValueReducer'

export default combineReducers({
    AppReducer,
    contactSelected: ContactSelectedReducer,
    messageValue: messageValueReducer
})

