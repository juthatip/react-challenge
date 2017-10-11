import { SAVE_ENEMY, FETCH_ENEMY, CLEAR_ENEMY, WIN_STATE } from '../actions'

// const INITAIL_STATE = { enemy:[], }

export default function (state = [], action) {
    switch (action.type) {
        case SAVE_ENEMY:
            return []
        case WIN_STATE:
            return [...action.payload]
        case FETCH_ENEMY:
            // console.log("reducer==>", JSON.stringify(action.payload))
            // return Object.assign({}, state, action.payload) merge data
            return [...action.payload]
        case CLEAR_ENEMY:
            return []
        default:
            return state
    }
}