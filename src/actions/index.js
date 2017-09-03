export const FETCH_STORE = 'FETCH_STORE'
export const SAVE_STORE    = 'SAVE_STORE'

export function saveStorage(props) {
    // console.log("saveStore ==>", props)

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