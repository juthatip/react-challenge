import { combineReducers } from 'redux'
import StoreReducer from './StoreReducer'
import MonsterReducer from './MonsterReducer'
import EnemyReducer from './EnemyReducer'

const rootReducer = combineReducers({
    store: StoreReducer,
    monster: MonsterReducer,
    enemy: EnemyReducer
});

export default rootReducer;
