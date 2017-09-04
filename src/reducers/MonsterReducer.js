import { SAVE_MONSTER } from '../actions'

export default function (state = {}, action) {
  switch(action.type) {
    case SAVE_MONSTER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}