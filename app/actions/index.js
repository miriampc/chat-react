import { CONTACT_SELECTED } from './types'

export const contactSelected = (contact) => {
  console.log('ActionCreator contactselected', contact)
  
  return {
    type: CONTACT_SELECTED,
    payload: contact
  }
}
