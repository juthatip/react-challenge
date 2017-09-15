import { SAVE_BATTLE } from 'react'

export default function(state = false, action) {
  switch(action.type) {
    case SAVE_BATTLE:
      return action.payload
    default:  
      return state
  }
}