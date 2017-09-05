import { SAVE_MONSTER , FETCH_MONSTER } from '../actions'

export default function (state = '', action) {
  console.log(action.type)
  switch(action.type) {
    case FETCH_MONSTER:
      return Object.assign({}, state, action.payload)
    case SAVE_MONSTER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}