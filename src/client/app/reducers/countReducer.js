'use strict'
const DEFAULT_STATE = { count: 1 };
const TOTAL_PAGES = 50;

export function countB(state = DEFAULT_STATE, action = null) {
	switch (action.type) {
		case 'myActionName_UpdateCount':
			state = Object.assign({}, state, { count: state.count + action.payload });
			break;
		case 'COUNT_NEXT':
			state = Object.assign({}, state, {
				count: state.count >= TOTAL_PAGES - 1 ? state.count = DEFAULT_STATE.count : state.count + action.payload
			});
			break;
		case 'COUNT_PREV':
			state = Object.assign({}, state, {
				count: state.count <= 1 ? state.count = TOTAL_PAGES - 1 : state.count - action.payload
			});
			break;
		default:
			state = state;
			break;
	}
	return state;
}
