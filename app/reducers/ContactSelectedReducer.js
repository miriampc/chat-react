import { CONTACT_SELECTED } from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case CONTACT_SELECTED:
            return action.payload
        default:
            return state
    }
}