import { combineReducers } from 'redux'
import StoreReducer from './StoreReducer'
import MonsterReducer from './MonsterReducer'
import EnemyReducer from './EnemyReducer'
import BattleReducer from './BattleReducer'

const rootReducer = combineReducers({
    store: StoreReducer,
    monster: MonsterReducer,
    enemy: EnemyReducer,
    battle: BattleReducer 
});

export default rootReducer;
