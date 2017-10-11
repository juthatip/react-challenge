import { FETCH_EQUIP } from '../actions'

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_EQUIP:
			return [...action.payload]
		default:
			return state
	}
}