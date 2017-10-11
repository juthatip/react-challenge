import { EQUIP_DATA, SAVE_EQUIP_DATA } from '../actions'

export default function (state = [], action) {
	switch (action.type) {
		case EQUIP_DATA:
			return [...action.payload]
		case SAVE_EQUIP_DATA:
			return [...action.payload]
	}
	return state
}