export const FETCH_STORE = 'FETCH_STORE'
export const SAVE_STORE    = 'SAVE_STORE'
export const SAVE_TRAINING_STATUS = 'SAVE_TRAINING_STATUS'
export const SAVE_MONSTER = 'SAVE_MONSTER'
export const FETCH_MONSTER = 'FETCH_MONSTER'
export const SAVE_ENEMY = 'SAVE_ENEMY'
export const FETCH_ENEMY = 'FETCH_ENEMY'
export const CLEAR_ENEMY = 'CLEAR_ENEMY'
export const SAVE_BATTLE = 'SAVE_BATTLE'

export function saveStorage(props) {
  // console.log(props)

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
  // console.log(monster)
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

  // console.log(monster)

  return dispatch => {
    dispatch({type: SAVE_TRAINING_STATUS })
  }
}

// enemy
export function saveEnemy(enemy) {

  return dispatch => {
    dispatch({ type: SAVE_ENEMY, payload: enemy })
  }
  
} 

export function fetchEnemy(enemy) {

  return dispatch => {
    dispatch({type: FETCH_ENEMY, payload: enemy})
  }
}

export function clearEnemy() {

  return dispatch => {
    dispatch({type: CLEAR_ENEMY})
  }
}

export function saveBattle(status) {
  
  return dispatch => {
    dispatch({type: SAVE_BATTLE, payload: status})
  }
}