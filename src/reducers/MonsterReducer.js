import { SAVE_MONSTER , FETCH_MONSTER, UPDATE_MONSTER } from '../actions'

export default function (state = '', action) {
  // console.log(action.type)
  switch(action.type) {
    case FETCH_MONSTER:
      return Object.assign({}, state, action.payload)
    case SAVE_MONSTER:
      return Object.assign({}, state, action.payload)
    case UPDATE_MONSTER:
    let equipment = { equipment: action.payload} 
    let newState = {...state, ...equipment}
      return newState
    default:
      return state
  }
}