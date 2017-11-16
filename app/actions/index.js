import { CONTACT_SELECTED, MESSAGE_VALUE } from './types'


export const contactSelected = (contact) => {
  console.log('ActionCreator contactselected', contact)
  
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
}