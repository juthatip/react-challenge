import { SAVE_ENEMY , FETCH_ENEMY , CLEAR_ENEMY } from '../actions'

export default function (state =  [], action) {
    switch(action.type) {
        case SAVE_ENEMY:
            return Object.assign({}, state, action.payload)
        case FETCH_ENEMY:
            return Object.assign({}, state, action.payload)
        case CLEAR_ENEMY:
            return []
        default:
            return state
    }
}