export const FETCH_STORE = 'FETCH_STORE'
export const SAVE_STORE = 'SAVE_STORE'
export const SAVE_TRAINING_STATUS = 'SAVE_TRAINING_STATUS'
export const SAVE_MONSTER = 'SAVE_MONSTER'
export const FETCH_MONSTER = 'FETCH_MONSTER'
export const UPDATE_MONSTER = 'UPDATE_MONSTER'
export const SAVE_ENEMY = 'SAVE_ENEMY'
export const FETCH_ENEMY = 'FETCH_ENEMY'
export const CLEAR_ENEMY = 'CLEAR_ENEMY'
export const SAVE_BATTLE = 'SAVE_BATTLE'
export const WIN_STATE = 'WIN_STATE'
export const FETCH_EQUIP = 'FETCH_EQUIP'
export const EQUIP_DATA = 'EQUIP_DATA'
export const SAVE_EQUIP_DATA = 'SAVE_EQUIP_DATA'

export function saveStorage(props) {
  // console.log("save props ==>", props)

  return dispatch => {
    dispatch({ type: SAVE_STORE, payload: props })
  }
}

export function fetchStorage(props) {
  props = props || { currentMoney: 10000 }

  return dispatch => {
    dispatch({ type: FETCH_STORE, payload: props })
  }
}

export function saveMonster(props) {
  console.log("==>",props)
  return dispatch => {
    dispatch({ type: SAVE_MONSTER, payload: props })
  }
}

export function fetchMonster(monster) {
  // console.log(monster)
  const props = monster

  return dispatch => {
    dispatch({ type: FETCH_MONSTER, payload: props })
  }

}

export function updateMonster(props) {

  return dispatch => {
    dispatch({ type: UPDATE_MONSTER, payload: props})
  }
}


export function saveTrainingStatus(status, monster) {

  if (monster.status.stamina > 0) {

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
    dispatch({ type: SAVE_TRAINING_STATUS })
  }
}

// enemy
export function saveEnemy(enemy) {

  return dispatch => {
    dispatch({ type: FETCH_ENEMY, payload: enemy })
  }

}

export function winState(leftEnemy, currentEnemy) {

  const index = leftEnemy.indexOf(currentEnemy)
  if (index != -1) {
    leftEnemy.splice(index, 1);
  }

  return dispatch => {
    dispatch({ type: FETCH_ENEMY, payload: leftEnemy })
  }
}

export function fetchEnemy(enemy) {

  return dispatch => {
    dispatch({ type: FETCH_ENEMY, payload: enemy })
  }
}

export function clearEnemy() {

  return dispatch => {
    dispatch({ type: CLEAR_ENEMY })
  }
}

export function saveBattle(status) {


  return dispatch => {
    dispatch({ type: SAVE_BATTLE, payload: status })
  }
}

// product
export function fetchEquipment(data) {
  let equipData = [
    { title: 'sword', price: 500 },
    { title: 'armour', price: 200 },
    { title: 'boot', price: 100 }
  ]

  const props = data || equipData
  return dispatch => {
    dispatch({ type: FETCH_EQUIP, payload: props })
  }
}

export function fetchEquipmentData(props) {
  let equipData = [
    { title: 'sword', price: 500 },
    { title: 'armour', price: 200 },
    { title: 'boot', price: 100 }
  ]

  let level = [{ title: 'sword', level: 1 }, { title: 'armour', level: 1 }, { title: 'boot', level: 1 }]
  let equipmentData = []

  if (!props.length) {
    let data = equipData
    for (let n = 0; n < data.length; n++) {
      if (data[n].title === level[n].title) {
        equipmentData.push({ title: data[n].title, price: data[n].price, level: level[n].level })
      }
    }
  } else {
    equipmentData = props
  }

  return dispatch => {
    dispatch({ type: EQUIP_DATA, payload: equipmentData })
  }

}

export function saveEquipmentData(data) {

  return dispatch => {
    dispatch({ type: SAVE_EQUIP_DATA, payload: data })
  }
}


