export const FETCH_STORE = 'FETCH_STORE'
export const SAVE_STORE    = 'SAVE_STORE'
export const SAVE_TRAINING_STATUS = 'SAVE_TRAINING_STATUS'
export const SAVE_MONSTER = 'SAVE_MONSTER'
export const FETCH_MONSTER = 'FETCH_MONSTER'

export function saveStorage(props) {
    return dispatch => {
        dispatch({ type: SAVE_STORE, payload: props})
    } 
}

export function fetchStorage(props) {
    props = props || { currentMoney: 10000 }

    return dispatch => {
        dispatch({type: FETCH_STORE, payload: props })
    }
}

export function saveMonster(props) {
  return dispatch => {
    dispatch({type: SAVE_MONSTER, payload: props})
  }
}

export function fetchMonster(monster) {
  console.log(monster)
  const props = monster

  return dispatch => {
    dispatch({type: FETCH_MONSTER, payload: props})
  }

}

export function saveTrainingStatus(status, monster) {

  if(monster.status.stamina > 0) {

    if (status === 'run') {
      monster.status.agi += 5
    } else if (status === 'carry') {
      monster.status.str += 5
    } else if (status === 'swim') {
      monster.status.hp += 20
    }
    
    monster.status.stamina -= 20 
  }


  console.log(monster)

  // agi = 5, str = 5, hp = 20

  // monster + status


  return dispatch => {
    dispatch({type: SAVE_TRAINING_STATUS })
  }
}