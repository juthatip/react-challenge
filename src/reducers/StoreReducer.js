import { SAVE_STORE, FETCH_STORE } from '../actions'

export default function(state = '', action) {
    switch(action.type) {
        case FETCH_STORE:

        console.log("fetch store==>", action.payload)
            return Object.assign({}, state, action.payload )
        case SAVE_STORE:
            return Object.assign({}, state, action.payload )
        default:
            return state
    }
}


    // let newStoreItems = {}
    // if(this.props.store.selectedItem) {
    //   newStoreItems = Object.assign({}, this.props.store.selectedItem, { [this.state.selectedItem] : newItems })
    // } else {
    //   newStoreItems = {[this.state.selectedItem] : newItems }
    // }