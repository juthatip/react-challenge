import { combineReducers } from 'redux'
import StoreReducer from './StoreReducer'
import MonsterReducer from './MonsterReducer'
import EnemyReducer from './EnemyReducer'
import BattleReducer from './BattleReducer'
import EquipmentReducer from './EquipmentReducer'
import EquipmentDataReducer from './EquipmentDataReducer'

const rootReducer = combineReducers({
    store: StoreReducer,
    monster: MonsterReducer,
    enemy: EnemyReducer,
    battle: BattleReducer,
    equipment: EquipmentReducer,
    equipmentData: EquipmentDataReducer
});

export default rootReducer;
