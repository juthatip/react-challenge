import { SAVE_STORE, FETCH_STORE } from '../actions'

// const INITIAL_STATE = { money: [] }

export default function(state = '', action) {
    // console.log("storeReducer ==>", action.payload)
    switch(action.type) {
        case FETCH_STORE:   
            return Object.assign({}, state, action.payload )
        case SAVE_STORE:
            return Object.assign({}, state, action.payload )
        default:
            return state
    }
}