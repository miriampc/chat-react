import {
    CONTACT_SELECTED,
    FILTER_CONTACTS_NAME,
    MESSAGE_VALUE
} from './types'

// ACTIONS CREATORS
export const contactSelected = (contact) => {
  console.log('ActionCreator contactSelected', contact)
  return {
    type: CONTACT_SELECTED,
    payload: contact
  }
}

export const messageValue = (value) => {
  console.log('message value', value);
  return {
    type: MESSAGE_VALUE,
    payload: value
  }

export const filterContactsName = (text) => {
    return {
        type: FILTER_CONTACTS_NAME,
        payload: text
    }
}