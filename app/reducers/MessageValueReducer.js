import { MESSAGE_VALUE } from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case MESSAGE_VALUE:
            return action.payload
        default:
            return state
    }
}
