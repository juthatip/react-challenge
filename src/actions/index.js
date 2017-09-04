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

export function fetchMonster() {
  const props = [
    {
      name: "monster01",
      status: {
        hp: 100,
        mp: 100,
        str: 100,
        vit: 100,
        agi: 100,
        dex: 100,
        luck: 0,
        extraElement: "",
        stamina: 100
      }
    },
    {
      name: "monster02",
      status: {
        hp: 200,
        mp: 200,
        str: 200,
        vit: 200,
        agi: 200,
        dex: 200,
        luck: 0,
        extraElement: "",
        stamina: 100
      }
    },
    {
      name: "monster03",
      status: {
        hp: 300,
        mp: 300,
        str: 300,
        vit: 300,
        agi: 300,
        dex: 300,
        luck: 0,
        extraElement: "",
        stamina: 100
      }
    },
  ]

  return dispatch => {
    dispatch({type: FETCH_MONSTER, payload: props})
  }

}

export function saveTrainingStatus(status, monster) {

  // agi = 5, str = 5, hp = 20

  // monster + status


  // return dispatch => {
  //   dispatch({type: SAVE_TRAINING_STATUS, payload: props })
  // }
}