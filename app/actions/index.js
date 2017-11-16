import {
    CONTACT_SELECTED,
    FILTER_CONTACTS_NAME
} from './types'

// ACTIONS CREATORS
export const contactSelected = (contact) => {
  console.log('ActionCreator contactSelected', contact)
  return {
    type: CONTACT_SELECTED,
    payload: contact
  }
}

export const filterContactsName = (text) => {
    return {
        type: FILTER_CONTACTS_NAME,
        payload: text
    }
}