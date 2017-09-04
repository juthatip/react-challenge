import { combineReducers } from 'redux'
import StoreReducer from './StoreReducer'
import MonsterReducer from './MonsterReducer'

const rootReducer = combineReducers({
    store: StoreReducer,
    monster: MonsterReducer
});

export default rootReducer;
