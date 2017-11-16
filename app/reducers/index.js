import { combineReducers } from 'redux'
import AppReducer from './AppReducer'
import ContactSelectedReducer from './ContactSelectedReducer'

export default combineReducers({
    AppReducer,
    contactSelected: ContactSelectedReducer
})