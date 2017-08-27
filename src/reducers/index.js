import { combineReducers } from 'redux'
import storeReducer from './StoreReducer'

const rootReducer = combineReducers({
    store: storeReducer
});

export default rootReducer;
